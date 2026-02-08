import { useEffect, useRef } from 'react'

// Industry card data
const industryCards = [
  {
    title: 'Home & Living',
    icon: '🏠',
    items: [
      { emoji: '🛋️', text: 'Furniture & Sofas' },
      { emoji: '🍳', text: 'Kitchen Appliances' },
      { emoji: '🖼️', text: 'Home Decor' },
      { emoji: '💡', text: 'Lighting & Fixtures' },
      { emoji: '🛏️', text: 'Bedding & Linens' },
      { emoji: '🚿', text: 'Bathroom Fixtures' }
    ],
    moreCount: 15
  },
  {
    title: 'Electronics',
    icon: '⚡',
    items: [
      { emoji: '📱', text: 'Mobile Devices' },
      { emoji: '💻', text: 'Computers & Laptops' },
      { emoji: '🎧', text: 'Audio Equipment' },
      { emoji: '📺', text: 'TVs & Displays' },
      { emoji: '🔌', text: 'Components & Parts' },
      { emoji: '🎮', text: 'Gaming Equipment' }
    ],
    moreCount: 20
  },
  {
    title: 'Fashion & Textiles',
    icon: '👗',
    items: [
      { emoji: '👔', text: 'Clothing & Apparel' },
      { emoji: '👟', text: 'Footwear' },
      { emoji: '👜', text: 'Bags & Accessories' },
      { emoji: '🧵', text: 'Fabrics & Textiles' },
      { emoji: '💍', text: 'Jewelry' },
      { emoji: '🧢', text: 'Headwear & Caps' }
    ],
    moreCount: 18
  },
  {
    title: 'Construction',
    icon: '🏗️',
    items: [
      { emoji: '🧱', text: 'Building Materials' },
      { emoji: '🔧', text: 'Tools & Equipment' },
      { emoji: '🚿', text: 'Plumbing Supplies' },
      { emoji: '⚡', text: 'Electrical Fittings' },
      { emoji: '🪟', text: 'Doors & Windows' },
      { emoji: '🏠', text: 'Roofing Materials' }
    ],
    moreCount: 25
  },
  {
    title: 'Vehicles & Auto',
    icon: '🚗',
    items: [
      { emoji: '🚙', text: 'Cars & Sedans' },
      { emoji: '🚚', text: 'Trucks & Lorries' },
      { emoji: '🏍️', text: 'Motorcycles' },
      { emoji: '🛞', text: 'Tires & Wheels' },
      { emoji: '⚙️', text: 'Engine Parts' },
      { emoji: '🔋', text: 'Batteries & Power' }
    ],
    moreCount: 22
  },
  {
    title: 'Souvenirs & Gifts',
    icon: '🎁',
    items: [
      { emoji: '🧸', text: 'Toys & Plush' },
      { emoji: '🎨', text: 'Crafts & Art' },
      { emoji: '🏺', text: 'Decorative Items' },
      { emoji: '📿', text: 'Keychains & Charms' },
      { emoji: '🎎', text: 'Cultural Items' },
      { emoji: '🧲', text: 'Magnets & Collectibles' }
    ],
    moreCount: 12
  }
]

export default function IndustriesGallery() {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const galleryInitialized = useRef(false)

  useEffect(() => {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return

    gsap.registerPlugin(ScrollTrigger)

    // Check if already animated this session
    const alreadyAnimated = sessionStorage.getItem('industriesAnimated') === 'true'

    // Setup text with optional animation
    const setupText = (element) => {
      if (!element) return

      const text = element.textContent.trim()
      element.innerHTML = ''

      const words = text.split(' ')
      words.forEach((word, wordIndex) => {
        const wordWrapper = document.createElement('span')
        wordWrapper.style.display = 'inline-block'
        wordWrapper.style.whiteSpace = 'nowrap'

        word.split('').forEach((char) => {
          const span = document.createElement('span')
          span.className = 'char'
          span.textContent = char
          span.style.display = 'inline-block'
          // If already animated, set final state
          if (alreadyAnimated) {
            span.style.opacity = '1'
            span.style.transform = 'translateY(0%) scaleY(1) scaleX(1)'
          }
          wordWrapper.appendChild(span)
        })

        element.appendChild(wordWrapper)

        if (wordIndex < words.length - 1) {
          // Use regular space text node to allow natural line wrapping
          const space = document.createTextNode(' ')
          element.appendChild(space)
        }
      })

      // Skip animation if already animated
      if (alreadyAnimated) return

      const chars = element.querySelectorAll('.char')

      gsap.fromTo(
        chars,
        {
          opacity: 0,
          yPercent: 120,
          scaleY: 2.3,
          scaleX: 0.7,
          transformOrigin: '50% 0%'
        },
        {
          duration: 0.6,
          ease: 'back.out(1.5)',
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
          stagger: 0.015,
          scrollTrigger: {
            trigger: element,
            start: 'top bottom+=20%',
            end: 'top center',
            scrub: 0.5,
            onEnter: () => sessionStorage.setItem('industriesAnimated', 'true')
          }
        }
      )
    }

    setupText(titleRef.current)
    setupText(subtitleRef.current)
  }, [])

  useEffect(() => {
    if (galleryInitialized.current || !containerRef.current) return

    // Dynamically import OGL and initialize gallery
    const initGallery = async () => {
      try {
        const OGL = await import('https://cdn.jsdelivr.net/npm/ogl@1.0.8/+esm')
        const { Camera, Mesh, Plane, Program, Renderer, Texture, Transform } = OGL

        // Create card canvas
        const createCardCanvas = (cardData) => {
          const canvas = document.createElement('canvas')
          const ctx = canvas.getContext('2d')
          const width = 400
          const height = 560
          const dpr = 2

          canvas.width = width * dpr
          canvas.height = height * dpr
          ctx.scale(dpr, dpr)

          // Card background
          const gradient = ctx.createLinearGradient(0, 0, width, height)
          gradient.addColorStop(0, 'rgba(236, 255, 220, 0.98)')
          gradient.addColorStop(1, 'rgba(220, 245, 200, 0.98)')

          const radius = 25
          ctx.beginPath()
          ctx.roundRect(0, 0, width, height, radius)
          ctx.fillStyle = gradient
          ctx.fill()

          ctx.strokeStyle = 'rgba(47, 111, 115, 0.1)'
          ctx.lineWidth = 1
          ctx.stroke()

          // Header
          const headerY = 35
          const iconSize = 50
          const iconX = 30
          const iconY = headerY

          const iconGradient = ctx.createLinearGradient(iconX, iconY, iconX + iconSize, iconY + iconSize)
          iconGradient.addColorStop(0, '#2F6F73')
          iconGradient.addColorStop(1, '#5F7364')

          ctx.beginPath()
          ctx.roundRect(iconX, iconY, iconSize, iconSize, 12)
          ctx.fillStyle = iconGradient
          ctx.fill()

          ctx.font = '28px Arial'
          ctx.textAlign = 'center'
          ctx.textBaseline = 'middle'
          ctx.fillText(cardData.icon, iconX + iconSize / 2, iconY + iconSize / 2 + 2)

          ctx.font = '600 20px Outfit, sans-serif'
          ctx.fillStyle = '#1C1C1C'
          ctx.textAlign = 'left'
          ctx.textBaseline = 'middle'
          ctx.fillText(cardData.title, iconX + iconSize + 15, iconY + iconSize / 2)

          ctx.beginPath()
          ctx.moveTo(25, headerY + iconSize + 20)
          ctx.lineTo(width - 25, headerY + iconSize + 20)
          ctx.strokeStyle = 'rgba(47, 111, 115, 0.15)'
          ctx.lineWidth = 2
          ctx.stroke()

          // Items
          const itemStartY = headerY + iconSize + 45
          const itemHeight = 52

          cardData.items.forEach((item, index) => {
            const itemY = itemStartY + index * itemHeight

            const itemGradient = ctx.createLinearGradient(25, itemY, width - 25, itemY + 42)
            itemGradient.addColorStop(0, 'rgba(255, 255, 255, 0.7)')
            itemGradient.addColorStop(1, 'rgba(255, 255, 255, 0.5)')

            ctx.beginPath()
            ctx.roundRect(25, itemY, width - 50, 42, 10)
            ctx.fillStyle = itemGradient
            ctx.fill()

            ctx.strokeStyle = 'rgba(47, 111, 115, 0.15)'
            ctx.lineWidth = 1
            ctx.stroke()

            ctx.font = '20px Arial'
            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle'
            ctx.fillText(item.emoji, 50, itemY + 21)

            ctx.font = '400 14px Outfit, sans-serif'
            ctx.fillStyle = '#1C1C1C'
            ctx.textAlign = 'left'
            ctx.fillText(item.text, 75, itemY + 22)
          })

          // More text
          const moreY = height - 40
          ctx.beginPath()
          ctx.moveTo(25, moreY - 15)
          ctx.lineTo(width - 25, moreY - 15)
          ctx.strokeStyle = 'rgba(47, 111, 115, 0.1)'
          ctx.lineWidth = 1
          ctx.stroke()

          ctx.font = '500 13px Outfit, sans-serif'
          ctx.fillStyle = '#2F6F73'
          ctx.textAlign = 'center'
          ctx.fillText(`+ ${cardData.moreCount} more categories`, width / 2, moreY + 5)

          return canvas
        }

        const industryItems = industryCards.map(card => ({
          canvas: createCardCanvas(card)
        }))

        // Utility functions
        const lerp = (p1, p2, t) => p1 + (p2 - p1) * t

        class Media {
          constructor({ geometry, gl, canvas, index, length, scene, screen, viewport, bend, borderRadius }) {
            this.extra = 0
            this.geometry = geometry
            this.gl = gl
            this.canvas = canvas
            this.index = index
            this.length = length
            this.scene = scene
            this.screen = screen
            this.viewport = viewport
            this.bend = bend
            this.borderRadius = borderRadius
            this.createShader()
            this.createMesh()
            this.onResize()
          }

          createShader() {
            const texture = new Texture(this.gl, { generateMipmaps: true })
            this.program = new Program(this.gl, {
              depthTest: false,
              depthWrite: false,
              vertex: `
                precision highp float;
                attribute vec3 position;
                attribute vec2 uv;
                uniform mat4 modelViewMatrix;
                uniform mat4 projectionMatrix;
                uniform float uTime;
                uniform float uSpeed;
                varying vec2 vUv;
                void main() {
                  vUv = uv;
                  vec3 p = position;
                  p.z = (sin(p.x * 4.0 + uTime) * 0.8 + cos(p.y * 2.0 + uTime) * 0.8) * (0.05 + uSpeed * 0.3);
                  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
                }
              `,
              fragment: `
                precision highp float;
                uniform vec2 uImageSizes;
                uniform vec2 uPlaneSizes;
                uniform sampler2D tMap;
                uniform float uBorderRadius;
                varying vec2 vUv;

                float roundedBoxSDF(vec2 p, vec2 b, float r) {
                  vec2 d = abs(p) - b;
                  return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
                }

                void main() {
                  vec2 ratio = vec2(
                    min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
                    min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
                  );
                  vec2 uv = vec2(
                    vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
                    vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
                  );
                  vec4 color = texture2D(tMap, uv);
                  float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
                  float alpha = 1.0 - smoothstep(-0.002, 0.002, d);
                  gl_FragColor = vec4(color.rgb, alpha);
                }
              `,
              uniforms: {
                tMap: { value: texture },
                uPlaneSizes: { value: [0, 0] },
                uImageSizes: { value: [0, 0] },
                uSpeed: { value: 0 },
                uTime: { value: 100 * Math.random() },
                uBorderRadius: { value: this.borderRadius }
              },
              transparent: true
            })

            texture.image = this.canvas
            this.program.uniforms.uImageSizes.value = [this.canvas.width, this.canvas.height]
          }

          createMesh() {
            this.plane = new Mesh(this.gl, { geometry: this.geometry, program: this.program })
            this.plane.setParent(this.scene)
          }

          update(scroll, direction) {
            this.plane.position.x = this.x - scroll.current - this.extra
            const x = this.plane.position.x
            const H = this.viewport.width / 2

            if (this.bend === 0) {
              this.plane.position.y = 0
              this.plane.rotation.z = 0
            } else {
              const B_abs = Math.abs(this.bend)
              const R = (H * H + B_abs * B_abs) / (2 * B_abs)
              const effectiveX = Math.min(Math.abs(x), H)
              const arc = R - Math.sqrt(R * R - effectiveX * effectiveX)
              if (this.bend > 0) {
                this.plane.position.y = -arc
                this.plane.rotation.z = -Math.sign(x) * Math.asin(effectiveX / R)
              } else {
                this.plane.position.y = arc
                this.plane.rotation.z = Math.sign(x) * Math.asin(effectiveX / R)
              }
            }

            this.speed = scroll.current - scroll.last
            this.program.uniforms.uTime.value += 0.04
            this.program.uniforms.uSpeed.value = this.speed

            const planeOffset = this.plane.scale.x / 2
            const viewportOffset = this.viewport.width / 2
            this.isBefore = this.plane.position.x + planeOffset < -viewportOffset
            this.isAfter = this.plane.position.x - planeOffset > viewportOffset
            if (direction === 'right' && this.isBefore) {
              this.extra -= this.widthTotal
              this.isBefore = this.isAfter = false
            }
            if (direction === 'left' && this.isAfter) {
              this.extra += this.widthTotal
              this.isBefore = this.isAfter = false
            }
          }

          onResize({ screen, viewport } = {}) {
            if (screen) this.screen = screen
            if (viewport) this.viewport = viewport
            this.scale = this.screen.height / 1500
            this.plane.scale.y = (this.viewport.height * (900 * this.scale)) / this.screen.height
            this.plane.scale.x = (this.viewport.width * (700 * this.scale)) / this.screen.width
            this.plane.program.uniforms.uPlaneSizes.value = [this.plane.scale.x, this.plane.scale.y]
            this.padding = 2
            this.width = this.plane.scale.x + this.padding
            this.widthTotal = this.width * this.length
            this.x = this.width * this.index
          }
        }

        class CircularGallery {
          constructor(container, options = {}) {
            this.container = container
            this.scrollSpeed = options.scrollSpeed || 2
            this.scroll = { ease: options.scrollEase || 0.05, current: 0, target: 0, last: 0 }
            this.autoScroll = options.autoScroll !== false
            this.autoScrollSpeed = options.autoScrollSpeed || 2.5
            this.isInteracting = false
            this.createRenderer()
            this.createCamera()
            this.createScene()
            this.onResize()
            this.createGeometry()
            this.createMedias(options.items || industryItems, options.bend || 1, options.borderRadius || 0.05)
            this.update()
            this.addEventListeners()
          }

          createRenderer() {
            this.renderer = new Renderer({ alpha: true, antialias: true, dpr: Math.min(window.devicePixelRatio || 1, 2) })
            this.gl = this.renderer.gl
            this.gl.clearColor(0, 0, 0, 0)
            this.container.appendChild(this.gl.canvas)
          }

          createCamera() {
            this.camera = new Camera(this.gl)
            this.camera.fov = 45
            this.camera.position.z = 20
          }

          createScene() {
            this.scene = new Transform()
          }

          createGeometry() {
            this.planeGeometry = new Plane(this.gl, { heightSegments: 50, widthSegments: 100 })
          }

          createMedias(items, bend, borderRadius) {
            this.mediasImages = items.concat(items)
            this.medias = this.mediasImages.map((data, index) => {
              return new Media({
                geometry: this.planeGeometry,
                gl: this.gl,
                canvas: data.canvas,
                index,
                length: this.mediasImages.length,
                scene: this.scene,
                screen: this.screen,
                viewport: this.viewport,
                bend,
                borderRadius
              })
            })
          }

          onTouchDown(e) {
            this.isDown = true
            this.isInteracting = true
            this.scroll.position = this.scroll.current
            this.start = e.touches ? e.touches[0].clientX : e.clientX
          }

          onTouchMove(e) {
            if (!this.isDown) return
            const x = e.touches ? e.touches[0].clientX : e.clientX
            const distance = (this.start - x) * (this.scrollSpeed * 0.025)
            this.scroll.target = this.scroll.position + distance
          }

          onTouchUp() {
            this.isDown = false
            setTimeout(() => {
              this.isInteracting = false
            }, 2000)
          }

          onWheel(e) {
            const rect = this.container.getBoundingClientRect()
            if (e.clientY < rect.top || e.clientY > rect.bottom) return

            e.preventDefault()
            this.isInteracting = true
            const delta = e.deltaY || e.wheelDelta || e.detail
            this.scroll.target += (delta > 0 ? this.scrollSpeed : -this.scrollSpeed) * 0.2

            clearTimeout(this.wheelTimeout)
            this.wheelTimeout = setTimeout(() => {
              this.isInteracting = false
            }, 2000)
          }

          onResize() {
            this.screen = { width: this.container.clientWidth, height: this.container.clientHeight }
            this.renderer.setSize(this.screen.width, this.screen.height)
            this.camera.perspective({ aspect: this.screen.width / this.screen.height })
            const fov = (this.camera.fov * Math.PI) / 180
            const height = 2 * Math.tan(fov / 2) * this.camera.position.z
            const width = height * this.camera.aspect
            this.viewport = { width, height }
            if (this.medias) {
              this.medias.forEach(media => media.onResize({ screen: this.screen, viewport: this.viewport }))
            }
          }

          update() {
            if (this.autoScroll && !this.isInteracting) {
              this.scroll.target += this.autoScrollSpeed * 0.016
            }

            this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.scroll.ease)
            const direction = this.scroll.current > this.scroll.last ? 'right' : 'left'
            if (this.medias) {
              this.medias.forEach(media => media.update(this.scroll, direction))
            }
            this.renderer.render({ scene: this.scene, camera: this.camera })
            this.scroll.last = this.scroll.current
            this.raf = window.requestAnimationFrame(this.update.bind(this))
          }

          addEventListeners() {
            window.addEventListener('resize', this.onResize.bind(this))
            this.container.addEventListener('wheel', this.onWheel.bind(this), { passive: false })
            this.container.addEventListener('mousedown', this.onTouchDown.bind(this))
            this.container.addEventListener('mousemove', this.onTouchMove.bind(this))
            this.container.addEventListener('mouseup', this.onTouchUp.bind(this))
            this.container.addEventListener('touchstart', this.onTouchDown.bind(this))
            this.container.addEventListener('touchmove', this.onTouchMove.bind(this))
            this.container.addEventListener('touchend', this.onTouchUp.bind(this))
          }

          destroy() {
            if (this.raf) cancelAnimationFrame(this.raf)
            window.removeEventListener('resize', this.onResize.bind(this))
          }
        }

        new CircularGallery(containerRef.current, {
          items: industryItems,
          bend: 1,
          borderRadius: 0.05,
          scrollSpeed: 2,
          scrollEase: 0.05,
          autoScroll: true,
          autoScrollSpeed: 2.5
        })

        galleryInitialized.current = true
      } catch (error) {
        console.error('Failed to initialize gallery:', error)
      }
    }

    initGallery()
  }, [])

  return (
    <section className="industries-section section-dark" data-dark-section>
      <div className="industries-content">
        <div className="industries-header">
          <h2
            ref={titleRef}
            className="industries-title"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              color: 'white',
              marginBottom: '15px',
              overflow: 'hidden'
            }}
          >
            Industries We Serve
          </h2>
          <p
            ref={subtitleRef}
            className="industries-subtitle"
            style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '600px',
              margin: '0 auto',
              overflow: 'hidden'
            }}
          >
            Drag or scroll to explore the categories we source products for
          </p>
        </div>
        <div ref={containerRef} className="gallery-container"></div>
        <div className="gallery-hint">
          <span>←</span> Drag to explore <span>→</span>
        </div>
      </div>
    </section>
  )
}
