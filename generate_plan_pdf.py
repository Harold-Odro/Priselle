"""Generate the CBM Estimator (working name: Cubed) v1.0 platform plan as a PDF."""

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch, mm
from reportlab.platypus import (
    HRFlowable,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

OUTPUT = "/Applications/XAMPP/xamppfiles/htdocs/Priselle/Lula_Platform_Plan.pdf"

PRIMARY = colors.HexColor("#0F172A")
ACCENT = colors.HexColor("#0EA5E9")
MUTED = colors.HexColor("#475569")
LIGHT = colors.HexColor("#F1F5F9")
BORDER = colors.HexColor("#CBD5E1")
COVER_BG = colors.HexColor("#0B1220")


def build_styles():
    base = getSampleStyleSheet()
    return {
        "h1": ParagraphStyle(
            "h1",
            parent=base["Heading1"],
            fontName="Helvetica-Bold",
            fontSize=20,
            leading=24,
            textColor=PRIMARY,
            spaceBefore=20,
            spaceAfter=10,
        ),
        "h2": ParagraphStyle(
            "h2",
            parent=base["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=13,
            leading=17,
            textColor=ACCENT,
            spaceBefore=14,
            spaceAfter=4,
        ),
        "h3": ParagraphStyle(
            "h3",
            parent=base["Heading3"],
            fontName="Helvetica-Bold",
            fontSize=11,
            leading=15,
            textColor=PRIMARY,
            spaceBefore=10,
            spaceAfter=3,
        ),
        "body": ParagraphStyle(
            "body",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=10.5,
            leading=15,
            textColor=PRIMARY,
            spaceAfter=6,
        ),
        "bullet": ParagraphStyle(
            "bullet",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=10.5,
            leading=15,
            textColor=PRIMARY,
            leftIndent=14,
            bulletIndent=2,
            spaceAfter=3,
        ),
        "quote": ParagraphStyle(
            "quote",
            parent=base["Normal"],
            fontName="Helvetica-Oblique",
            fontSize=12,
            leading=17,
            textColor=ACCENT,
            leftIndent=14,
            spaceBefore=8,
            spaceAfter=10,
        ),
        "code": ParagraphStyle(
            "code",
            parent=base["Normal"],
            fontName="Courier",
            fontSize=9.5,
            leading=13,
            textColor=PRIMARY,
            backColor=LIGHT,
            borderColor=BORDER,
            borderWidth=0.5,
            borderPadding=8,
            leftIndent=0,
            rightIndent=0,
            spaceBefore=6,
            spaceAfter=10,
        ),
        "tablecell": ParagraphStyle(
            "tablecell",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=10,
            leading=14,
            textColor=PRIMARY,
        ),
        "tableheader": ParagraphStyle(
            "tableheader",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=10,
            leading=14,
            textColor=colors.white,
        ),
        "interview_q": ParagraphStyle(
            "interview_q",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=11,
            leading=15,
            textColor=PRIMARY,
            spaceBefore=10,
            spaceAfter=4,
        ),
        "interview_probe": ParagraphStyle(
            "interview_probe",
            parent=base["Normal"],
            fontName="Helvetica-Oblique",
            fontSize=10,
            leading=14,
            textColor=MUTED,
            leftIndent=14,
            spaceAfter=3,
        ),
    }


def p(text, style):
    return Paragraph(text, style)


def bullets(items, style):
    return [Paragraph(f"&bull;&nbsp;&nbsp;{item}", style) for item in items]


def numbered(items, style):
    return [Paragraph(f"<b>{i+1}.</b>&nbsp;&nbsp;{item}", style) for i, item in enumerate(items)]


def make_table(headers, rows, styles, col_widths=None):
    header_row = [Paragraph(h, styles["tableheader"]) for h in headers]
    body_rows = [
        [Paragraph(str(cell), styles["tablecell"]) for cell in row] for row in rows
    ]
    data = [header_row] + body_rows
    tbl = Table(data, colWidths=col_widths, repeatRows=1)
    tbl.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), PRIMARY),
                ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
                ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, LIGHT]),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 8),
                ("RIGHTPADDING", (0, 0), (-1, -1), 8),
                ("TOPPADDING", (0, 0), (-1, -1), 6),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
                ("GRID", (0, 0), (-1, -1), 0.25, BORDER),
            ]
        )
    )
    return tbl


def cover_page(canvas, doc):
    canvas.saveState()
    width, height = A4
    canvas.setFillColor(COVER_BG)
    canvas.rect(0, 0, width, height, stroke=0, fill=1)

    # Accent bar
    canvas.setFillColor(ACCENT)
    canvas.rect(18 * mm, height - 60 * mm, 60 * mm, 4, stroke=0, fill=1)

    canvas.setFont("Helvetica-Bold", 12)
    canvas.setFillColor(colors.HexColor("#7DD3FC"))
    canvas.drawString(18 * mm, height - 50 * mm, "WORKING NAME: CUBED")

    canvas.setFont("Helvetica-Bold", 52)
    canvas.setFillColor(colors.white)
    canvas.drawString(18 * mm, height - 95 * mm, "CBM Estimator")

    canvas.setFont("Helvetica", 18)
    canvas.setFillColor(colors.HexColor("#CBD5E1"))
    canvas.drawString(
        18 * mm,
        height - 112 * mm,
        "Photo-based shipping cost calculator",
    )
    canvas.drawString(
        18 * mm,
        height - 122 * mm,
        "for African importers",
    )

    canvas.setFont("Helvetica-Bold", 11)
    canvas.setFillColor(colors.HexColor("#7DD3FC"))
    canvas.drawString(
        18 * mm, height - 145 * mm, "VERSION 1.0  •  PLANNING DRAFT  •  JUNE 2026"
    )

    canvas.setFont("Helvetica", 9)
    canvas.setFillColor(colors.HexColor("#94A3B8"))
    canvas.drawString(18 * mm, 25 * mm, "Prepared by Priselle Sourcing &amp; Trade")
    canvas.drawRightString(width - 18 * mm, 25 * mm, "Confidential working plan")

    canvas.restoreState()


def header_footer(canvas, doc):
    if doc.page == 1:
        return
    canvas.saveState()
    width, height = A4
    canvas.setFont("Helvetica-Bold", 9)
    canvas.setFillColor(MUTED)
    canvas.drawString(18 * mm, height - 12 * mm, "CUBED  •  CBM Estimator v1.0")
    canvas.setStrokeColor(BORDER)
    canvas.setLineWidth(0.5)
    canvas.line(18 * mm, height - 14 * mm, width - 18 * mm, height - 14 * mm)
    canvas.line(18 * mm, 18 * mm, width - 18 * mm, 18 * mm)
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(MUTED)
    canvas.drawString(18 * mm, 12 * mm, "CBM Estimator — Planning Document")
    canvas.drawRightString(width - 18 * mm, 12 * mm, f"Page {doc.page - 1}")
    canvas.restoreState()


def build_story(styles):
    s = []

    # Placeholder for cover
    s.append(Spacer(1, 1))
    s.append(PageBreak())

    # Executive Summary
    s.append(p("Executive Summary", styles["h1"]))
    s.append(
        p(
            "A focused mobile-first tool that lets African importers photograph a "
            "supplier&rsquo;s carton and instantly calculate cubic meters (CBM), "
            "chargeable weight, total shipping cost, and landed cost per unit.",
            styles["body"],
        )
    )
    s.append(
        p(
            "Today, small importers calculate landed cost with WhatsApp messages, "
            "tape measures, and spreadsheets. Mistakes are expensive: a wrong CBM "
            "estimate can wipe out margin on an entire shipment or leave the "
            "seller quoting customers at a loss.",
            styles["body"],
        )
    )
    s.append(
        p(
            "Our wedge is the capture method: a photo of the carton with a credit "
            "card placed on top as a scale reference. Claude vision identifies the "
            "carton edges and the card, then computes dimensions. No tape measure, "
            "no spreadsheet, no guesswork.",
            styles["body"],
        )
    )
    s.append(
        p(
            "&ldquo;Snap a photo of your supplier&rsquo;s carton, "
            "get the true landed cost per unit.&rdquo;",
            styles["quote"],
        )
    )

    # 1. Problem Statement
    s.append(p("1. Problem Statement", styles["h1"]))
    s.append(
        p(
            "Small importers in West Africa face four compounding problems when "
            "quoting landed cost:",
            styles["body"],
        )
    )
    s.append(p("Volume estimation is manual and error-prone", styles["h2"]))
    s.append(
        p(
            "Sea freight is priced per cubic meter and air freight by dimensional "
            "weight. Importers measure cartons with tape measures, often after the "
            "shipment has already arrived. Mistakes compound across multiple carton types.",
            styles["body"],
        )
    )
    s.append(p("Suppliers send incomplete information", styles["h2"]))
    s.append(
        p(
            "Carton dimensions are often missing from supplier WhatsApp messages, "
            "sent in different units (cm vs. in vs. mm), or buried in a packing list.",
            styles["body"],
        )
    )
    s.append(p("Shipping rates are quoted, not centralised", styles["h2"]))
    s.append(
        p(
            "Importers negotiate their own rates with forwarders. There is no "
            "single source of truth, and rates change. A tool that hard-codes "
            "rates would be wrong for everyone.",
            styles["body"],
        )
    )
    s.append(p("Per-unit allocation requires math importers avoid", styles["h2"]))
    s.append(
        p(
            "Total shipping cost is meaningless without per-unit allocation. The "
            "math is simple but tedious, especially with multiple carton types in "
            "one shipment.",
            styles["body"],
        )
    )

    s.append(PageBreak())

    # 2. Target Customer
    s.append(p("2. Target Customer", styles["h1"]))
    s.append(p("Primary", styles["h2"]))
    s.append(
        p(
            "Solo or two-person importers in West Africa (Ghana, Nigeria), 25–40 "
            "years old, importing from Guangzhou or Yiwu. They place 1–8 supplier "
            "orders a month, use a freight forwarder, and quote landed cost to "
            "downstream customers (retail buyers, smaller resellers, or wholesale "
            "clients).",
            styles["body"],
        )
    )
    s.append(p("Typical profile:", styles["body"]))
    s.extend(
        bullets(
            [
                "Revenue between GHS 10,000 and GHS 300,000 per month",
                "Sources from China via WeChat / Alibaba / WhatsApp",
                "Ships via established forwarders (Twiga, Bollore, smaller agents)",
                "Lives in WhatsApp and Excel; mobile-first",
                "Currently uses a calculator and screenshots for landed-cost math",
            ],
            styles["bullet"],
        )
    )
    s.append(p("Secondary (later)", styles["h2"]))
    s.extend(
        bullets(
            [
                "Sourcing agents (like Priselle) quoting clients",
                "Freight forwarders quoting their own customers",
                "Cross-border resellers serving multiple African markets",
            ],
            styles["bullet"],
        )
    )
    s.append(p("Not for v1", styles["h2"]))
    s.extend(
        bullets(
            [
                "Large brands with internal logistics teams",
                "Established e-commerce on Shopify",
                "Container-load (FCL) importers — they have forwarders for this",
            ],
            styles["bullet"],
        )
    )

    # 3. Positioning
    s.append(p("3. Positioning", styles["h1"]))
    s.append(p("Core promise", styles["h2"]))
    s.append(p("&ldquo;Snap a photo of your supplier&rsquo;s carton, get the true landed cost per unit.&rdquo;", styles["quote"]))
    s.append(p("Why customers choose this", styles["h2"]))
    s.extend(
        bullets(
            [
                "Faster quotes to their customers",
                "Confidence the math is right",
                "No tape measure, no spreadsheet",
                "Works on mobile, in the field, at the port",
            ],
            styles["bullet"],
        )
    )
    s.append(p("Competitive landscape", styles["h2"]))
    s.append(
        p(
            "Existing CBM calculators (cbmcalculator.com, Freightos) are basic web "
            "forms with no photo capture, no per-unit allocation, no saved history, "
            "and no mobile-first UX. Forwarder portals are locked to one service. "
            "The gap: a focused mobile tool that captures, calculates, and shares.",
            styles["body"],
        )
    )

    s.append(PageBreak())

    # 4. The Product
    s.append(p("4. The Product", styles["h1"]))
    s.append(p("v1 does five jobs:", styles["body"]))
    s.extend(
        numbered(
            [
                "<b>Capture</b> — get carton dimensions via photo + credit-card reference, "
                "OR by typing them in, OR by pasting supplier text",
                "<b>Compute</b> — total CBM and chargeable weight across all carton types "
                "in the shipment",
                "<b>Price</b> — apply the user&rsquo;s freight rate (sea per CBM, air per kg)",
                "<b>Allocate</b> — landed shipping cost per unit",
                "<b>Share</b> — WhatsApp link + PDF export for forwarders, customers, "
                "or the importer&rsquo;s records",
            ],
            styles["body"],
        )
    )

    # 5. The Capture Mechanism
    s.append(p("5. The Capture Mechanism (Differentiator)", styles["h1"]))
    s.append(p("The 2-photo method", styles["h2"]))
    s.extend(
        numbered(
            [
                "<b>Top photo.</b> User places a credit card flat on the top of the "
                "carton, photographs straight down. App detects card and carton "
                "edges → calculates Length × Width.",
                "<b>Side photo.</b> User photographs one vertical side of the carton, "
                "with the credit card held against or placed beside it. App detects "
                "card and carton edge → calculates Height.",
                "<b>Confirm.</b> App shows estimated dimensions with a confidence "
                "score. User taps to accept or edits manually.",
            ],
            styles["body"],
        )
    )
    s.append(p("Why a credit card", styles["h2"]))
    s.append(
        p(
            "ISO/IEC 7810 ID-1 standard: 85.60 × 53.98 mm. Every importer has one in "
            "their wallet. Universal, free, no shipping required.",
            styles["body"],
        )
    )
    s.append(p("Backup reference objects:", styles["body"]))
    s.extend(
        bullets(
            [
                "A4 paper (210 × 297 mm)",
                "US Letter (216 × 279 mm)",
                "Ruler with clearly visible markings",
                "Hand (lowest accuracy; supported as last resort)",
            ],
            styles["bullet"],
        )
    )
    s.append(p("Accuracy expectations", styles["h2"]))
    s.extend(
        bullets(
            [
                "Two-photo + credit card → <b>~88–92% accuracy</b> on standard cartons",
                "Tolerable for sea-freight quoting (rates round to nearest 0.1 CBM)",
                "Confidence shown to user: e.g. &ldquo;Estimated L: 42 cm (±2 cm)&rdquo;",
                "Manual override available on every measurement",
            ],
            styles["bullet"],
        )
    )
    s.append(p("Quick mode (v1.5)", styles["h2"]))
    s.append(
        p(
            "Single tilted photo with the credit card next to the carton. Vision "
            "model infers all three dimensions in one shot. Lower accuracy (~78%) "
            "but a single tap. Gated behind a &ldquo;quick estimate&rdquo; toggle "
            "for experienced users.",
            styles["body"],
        )
    )
    s.append(p("Long-term capture options", styles["h2"]))
    s.extend(
        bullets(
            [
                "<b>v2:</b> Paste supplier spec sheet → Claude parses dimensions from text",
                "<b>v2:</b> OCR on supplier packing-list photo",
                "<b>v3:</b> Native iOS LiDAR scan — point and measure, ~95% accuracy",
            ],
            styles["bullet"],
        )
    )

    s.append(PageBreak())

    # 6. End-to-End User Flow
    s.append(p("6. End-to-End User Flow", styles["h1"]))
    flow_steps = [
        "Open app",
        "Tap <b>+ New shipment</b>",
        "Name the shipment (e.g. &ldquo;April handbags order&rdquo;)",
        "Add carton type #1: take top photo &rarr; take side photo &rarr; confirm dimensions",
        "Enter: cartons of this type, units per carton, weight per carton",
        "(Optional) Add carton type #2 with different dimensions",
        "Pick freight mode: Sea or Air",
        "Enter freight rate (e.g. $480/CBM sea, $6.50/kg air)",
        "See results: Total CBM, chargeable weight, total shipping, per-unit cost, sea-vs-air recommendation",
        "Save / share via WhatsApp link or download PDF",
    ]
    s.extend(numbered(flow_steps, styles["body"]))
    s.append(p("Target: under 90 seconds for a single-carton-type shipment.", styles["body"]))

    # 7. The Math
    s.append(p("7. The Math", styles["h1"]))
    s.append(
        p(
            "All math is deterministic plain code. The LLM only touches the vision "
            "step. The calculator never hallucinates.",
            styles["body"],
        )
    )
    s.append(
        p(
            "CBM per carton  = L(m) × W(m) × H(m)<br/>"
            "Total CBM       = CBM per carton × number of cartons<br/>"
            "Dim weight (kg) = (L cm × W cm × H cm) / 6000   [air freight]<br/>"
            "Chargeable (kg) = max(actual_weight, dim_weight)<br/><br/>"
            "Sea cost   = max(Total CBM × rate per CBM, min charge)<br/>"
            "Air cost   = max(Chargeable kg × rate per kg, min charge)<br/>"
            "Per unit   = total cost / (number of cartons × units per carton)",
            styles["code"],
        )
    )

    # 8. Screen Map
    s.append(p("8. Screen Map", styles["h1"]))
    screen_rows = [
        ["/", "Landing page"],
        ["/app", "Dashboard — list of saved shipments"],
        ["/app/new", "New-shipment flow (multi-step, mobile-first)"],
        ["/app/shipments/[id]", "Shipment detail, edit, share"],
        ["/app/rates", "Saved freight-rate presets"],
        ["/app/account", "Billing &amp; settings"],
        ["/s/[shareId]", "Public read-only shipment view (no auth)"],
    ]
    s.append(
        make_table(
            ["Route", "Purpose"],
            screen_rows,
            styles,
            col_widths=[2.0 * inch, 4.0 * inch],
        )
    )

    s.append(PageBreak())

    # 9. Data Model
    s.append(p("9. Data Model", styles["h1"]))
    data_rows = [
        ["users", "id, clerk_id, phone, email, created_at"],
        [
            "shipments",
            "id, user_id, name, mode (sea|air), freight_rate_id, total_cbm, "
            "total_weight, total_cost, per_unit_cost, currency, created_at",
        ],
        [
            "cartons",
            "id, shipment_id, length_m, width_m, height_m, weight_kg, count, "
            "units_per_carton, photo_top_url, photo_side_url, capture_method, confidence",
        ],
        [
            "freight_rates",
            "id, user_id, name, mode, origin, destination, rate, currency, min_charge",
        ],
        [
            "ai_jobs",
            "id, user_id, kind, tokens, cost, confidence, raw_response, created_at",
        ],
        ["shares", "id, shipment_id, share_token, view_count, created_at"],
    ]
    s.append(
        make_table(
            ["Table", "Columns"],
            data_rows,
            styles,
            col_widths=[1.4 * inch, 4.6 * inch],
        )
    )

    # 10. Tech Stack
    s.append(p("10. Tech Stack", styles["h1"]))
    stack_rows = [
        ["Framework", "Next.js 16 App Router on Vercel"],
        ["Mobile", "PWA with HTML5 camera capture (no native app v1)"],
        ["Styling", "Tailwind v4 + shadcn/ui"],
        ["Auth", "Clerk (phone OTP + Google)"],
        ["Database", "Neon Postgres"],
        ["File storage", "Vercel Blob"],
        ["AI", "Vercel AI Gateway &rarr; Claude Sonnet 4.6 (multimodal)"],
        ["Payments", "Paystack"],
        ["PDF generation", "@react-pdf/renderer (server-side)"],
        ["Analytics", "Vercel Analytics + PostHog"],
        ["Errors", "Sentry"],
    ]
    s.append(
        make_table(
            ["Layer", "Choice"],
            stack_rows,
            styles,
            col_widths=[1.6 * inch, 4.4 * inch],
        )
    )

    # 11. Accuracy & Confidence Strategy
    s.append(p("11. Accuracy &amp; Confidence Strategy", styles["h1"]))
    s.append(
        p(
            "Trust is the make-or-break. Three mechanisms:",
            styles["body"],
        )
    )
    s.extend(
        bullets(
            [
                "<b>Confidence score</b> — every estimate shows expected error in cm, "
                "drawn from the vision model&rsquo;s confidence + reference-detection quality",
                "<b>Single-tap edit</b> — every dimension is editable inline; no buried menus",
                "<b>Camera guidance</b> — live overlay shows where to place the card, "
                "warns on bad angles or poor lighting",
                "<b>&ldquo;Estimate, not invoice&rdquo;</b> labelling on every output; "
                "ToS makes liability clear",
            ],
            styles["bullet"],
        )
    )

    s.append(PageBreak())

    # 12. Pricing
    s.append(p("12. Pricing", styles["h1"]))
    pricing_rows = [
        ["<b>Free</b>", "GHS 0/month", "3 shipments/month, manual entry only"],
        [
            "<b>Starter</b>",
            "GHS 40/month (~$3.50)",
            "30 shipments/month, photo capture, save history, WhatsApp share",
        ],
        [
            "<b>Pro</b>",
            "GHS 120/month (~$10)",
            "Unlimited shipments, PDF export, multiple rate presets, history reports",
        ],
        [
            "<b>Forwarder</b> (later)",
            "GHS 400/month (~$33)",
            "Team seats, client-branded shares, multi-user accounts",
        ],
    ]
    s.append(
        make_table(
            ["Plan", "Price", "Includes"],
            pricing_rows,
            styles,
            col_widths=[1.2 * inch, 1.5 * inch, 3.3 * inch],
        )
    )
    s.append(
        p(
            "Photo capture is the paid-tier hook. Free users see the magic in a "
            "demo but must subscribe to use it on real shipments.",
            styles["body"],
        )
    )

    # 13. Cost Economics
    s.append(p("13. Cost Economics", styles["h1"]))
    s.extend(
        bullets(
            [
                "Each carton estimate: 2 Claude vision calls",
                "Sonnet vision @ ~1,500 input + 200 output tokens/call &asymp; $0.01 per call &rarr; "
                "<b>~$0.02 per carton</b>",
                "Pro user: 100 shipments/mo × 1.5 cartons avg = 150 cartons × $0.02 = "
                "<b>$3.00 AI cost</b> vs. ~$10 revenue. Healthy margin.",
                "Storage and CDN are negligible. Photos downsampled to ~800×800 before upload.",
            ],
            styles["bullet"],
        )
    )

    # 14. Roadmap
    s.append(p("14. Roadmap", styles["h1"]))
    s.append(p("v1 (Weeks 1–4)", styles["h2"]))
    s.extend(
        bullets(
            [
                "Auth, onboarding, freight-rate setup",
                "2-photo capture flow with credit-card reference",
                "Manual entry fallback",
                "Multi-carton shipments",
                "CBM &amp; landed-cost calculation",
                "Save history, WhatsApp share, PDF export",
                "Billing on Paystack with free tier",
            ],
            styles["bullet"],
        )
    )
    s.append(p("v1.5 (Months 2–3)", styles["h2"]))
    s.extend(
        bullets(
            [
                "Quick mode (single tilted photo)",
                "Paste supplier spec — Claude parses dimensions",
                "OCR on supplier packing-list photo",
                "Per-shipment notes &amp; attachments",
                "Multi-currency display",
            ],
            styles["bullet"],
        )
    )
    s.append(p("v2 (Months 3–6)", styles["h2"]))
    s.extend(
        bullets(
            [
                "Customs / duty estimator (Ghana first, then Nigeria, Kenya)",
                "Team accounts (multiple users per workspace)",
                "Forwarder rate library (community-sourced, opt-in)",
                "Quote templates &amp; client-branded PDFs",
            ],
            styles["bullet"],
        )
    )
    s.append(p("v3 (Months 6+)", styles["h2"]))
    s.extend(
        bullets(
            [
                "Native iOS app with LiDAR scan",
                "Sales-rate restock advisor (when paired with catalog data)",
                "Re-introduce catalog &amp; AI listings as an expansion module",
            ],
            styles["bullet"],
        )
    )

    s.append(PageBreak())

    # 15. What's Not in v1
    s.append(p("15. What&rsquo;s Not in v1", styles["h1"]))
    s.extend(
        bullets(
            [
                "Catalog, product pages, storefront",
                "AI listing, captions, translation",
                "Customer-facing online checkout",
                "Duty / customs calculation",
                "Automatic freight-rate lookups",
                "LiDAR / AR scanning",
                "Multi-currency at the shipment level",
                "Multi-user accounts",
            ],
            styles["bullet"],
        )
    )

    # 16. Risks
    s.append(p("16. Risks &amp; Mitigation", styles["h1"]))
    risk_rows = [
        [
            "Photo dimensions inaccurate &rarr; user under-quotes",
            "Confidence display, easy override, &ldquo;estimate&rdquo; labelling",
        ],
        [
            "User has no credit card / different reference",
            "Support A4, ruler, coin, hand (degraded accuracy)",
        ],
        [
            "Bad lighting, glare, dark cartons",
            "In-app camera overlay with positioning guidance",
        ],
        [
            "Irregular cartons (rolls, bags, non-rectangular)",
            "&ldquo;Bounding box&rdquo; mode + manual override",
        ],
        [
            "Suppliers&rsquo; stated weight differs from reality",
            "Show dim weight vs. actual weight side-by-side",
        ],
        [
            "Liability if estimate is wrong",
            "Clear &ldquo;estimate, not invoice&rdquo; disclaimer; ToS",
        ],
        [
            "Free CBM calculators undercut us",
            "Lean on photo + per-unit + save/share &mdash; they don&rsquo;t have these",
        ],
    ]
    s.append(
        make_table(
            ["Risk", "Mitigation"],
            risk_rows,
            styles,
            col_widths=[2.8 * inch, 3.2 * inch],
        )
    )

    # 17. Validation Plan
    s.append(p("17. Validation Plan", styles["h1"]))
    s.append(p("Two parallel tracks before any production build:", styles["body"]))
    s.append(p("Track A — Customer validation", styles["h2"]))
    s.append(p("Interview 5–8 importers in the Priselle network using the script in Appendix A.", styles["body"]))
    s.extend(
        bullets(
            [
                "5+ interviews completed",
                "3+ unprompted &ldquo;I&rsquo;d pay for this&rdquo; signals",
                "2+ beta-test commitments",
            ],
            styles["bullet"],
        )
    )
    s.append(p("Track B — Vision accuracy validation", styles["h2"]))
    s.extend(
        bullets(
            [
                "Photograph 8–10 real cartons with a credit-card reference (varied lighting, surfaces)",
                "Measure with a tape for ground truth",
                "Submit photos to Claude Sonnet 4.6 with structured prompt",
                "Compare estimates to ground truth, calculate mean error",
            ],
            styles["bullet"],
        )
    )
    s.append(p("Decision rule:", styles["body"]))
    s.extend(
        bullets(
            [
                "Mean error &lt; 8% &rarr; build v1 as planned",
                "8–15% &rarr; build with mandatory confirmation step",
                "&gt; 15% &rarr; rethink capture method (markers, AR, or pure manual + paste)",
            ],
            styles["bullet"],
        )
    )

    # 18. Open Decisions
    s.append(p("18. Open Decisions Before Build", styles["h1"]))
    s.extend(
        bullets(
            [
                "Final product name (working name: <b>Cubed</b>)",
                "Domain availability and trademark check",
                "Hosting region (Vercel EU vs. nearest AWS region for African latency)",
                "Single-founder build vs. design partner",
                "Beta cohort selection",
            ],
            styles["bullet"],
        )
    )

    # Appendix A — Interview Script
    s.append(PageBreak())
    s.append(p("Appendix A — Importer Interview Script", styles["h1"]))
    s.append(
        p(
            "Use this script to interview 5–8 active importers in the Priselle "
            "network. Goal: understand current behaviour and pain, not pitch the "
            "product. Follow Mom Test principles &mdash; ask about the past, get "
            "specifics, avoid hypotheticals.",
            styles["body"],
        )
    )

    s.append(p("Logistics", styles["h2"]))
    s.extend(
        bullets(
            [
                "Format: 15–20 minute call (WhatsApp voice or in-person)",
                "Record audio with consent (you&rsquo;ll forget the details)",
                "Take light notes; transcribe key quotes after",
                "No slides, no demo, no pitch — only listen",
            ],
            styles["bullet"],
        )
    )

    s.append(p("Opening (1 min)", styles["h2"]))
    s.append(
        p(
            "&ldquo;Thanks for the time. I&rsquo;m doing research on how importers "
            "handle the shipping math when they bring goods in from China — "
            "what&rsquo;s working, what&rsquo;s a headache. Nothing to sell; "
            "I&rsquo;d just love 15 minutes of your story. Mind if I record audio "
            "so I&rsquo;m not scribbling notes the whole time?&rdquo;",
            styles["body"],
        )
    )

    s.append(p("Question 1 — Current behaviour", styles["h2"]))
    s.append(p("Walk me through the last order you placed with a Chinese supplier. From the moment they sent you a quote — what did you do, step by step?", styles["interview_q"]))
    s.append(p("Probes:", styles["interview_probe"]))
    s.append(p("&bull; What did the supplier send you? (Photo, PDF, voice note?)", styles["interview_probe"]))
    s.append(p("&bull; Where did you write things down? (WhatsApp, Notes, Excel?)", styles["interview_probe"]))
    s.append(p("&bull; Who else was involved? (Forwarder, partner, customer?)", styles["interview_probe"]))

    s.append(p("Question 2 — The math moment", styles["h2"]))
    s.append(p("When the supplier gave you the quote, how did you figure out what it would actually cost you landed in Accra?", styles["interview_q"]))
    s.append(p("Probes:", styles["interview_probe"]))
    s.append(p("&bull; Did you measure the cartons? When &mdash; before ordering or after they arrived?", styles["interview_probe"]))
    s.append(p("&bull; How did you decide between sea and air?", styles["interview_probe"]))
    s.append(p("&bull; How long did the math take you?", styles["interview_probe"]))
    s.append(p("&bull; What rate did you use? Where did it come from?", styles["interview_probe"]))

    s.append(p("Question 3 — The worst case", styles["h2"]))
    s.append(p("Tell me about a time the landed cost came out way different than you expected. What happened?", styles["interview_q"]))
    s.append(p("Probes:", styles["interview_probe"]))
    s.append(p("&bull; What went wrong? (Wrong measurement, wrong rate, missed duty?)", styles["interview_probe"]))
    s.append(p("&bull; How much did it cost you?", styles["interview_probe"]))
    s.append(p("&bull; What did you do differently next time?", styles["interview_probe"]))

    s.append(PageBreak())

    s.append(p("Question 4 — Reaction (only at the very end)", styles["h2"]))
    s.append(p("If I told you there was a phone app where you could photograph a carton with a credit card on top, and it told you the CBM, the shipping cost, and the per-unit cost in 30 seconds &mdash; what&rsquo;s the first thing you&rsquo;d want to know?", styles["interview_q"]))
    s.append(p("Probes:", styles["interview_probe"]))
    s.append(p("&bull; Would you trust the photo measurement? Why / why not?", styles["interview_probe"]))
    s.append(p("&bull; What would have to be true for you to actually use it?", styles["interview_probe"]))
    s.append(p("&bull; Who else on your team would touch it?", styles["interview_probe"]))

    s.append(p("Question 5 — Willingness to pay", styles["h2"]))
    s.append(p("If this worked the way you&rsquo;re imagining, how much would you pay for it per month?", styles["interview_q"]))
    s.append(p("Probes:", styles["interview_probe"]))
    s.append(p("&bull; (After they answer) What would push you to pay more / less than that?", styles["interview_probe"]))
    s.append(p("&bull; Compare to anything else you pay for monthly in your business.", styles["interview_probe"]))

    s.append(p("Closing", styles["h2"]))
    s.append(
        p(
            "&ldquo;Really helpful. Last question — would you be open to being one "
            "of the first people to try it when I have something to show? No "
            "commitment, just an early look.&rdquo;",
            styles["body"],
        )
    )

    s.append(p("Recording template", styles["h2"]))
    s.append(p("After each interview, fill in:", styles["body"]))
    s.extend(
        bullets(
            [
                "Date, name, role, location",
                "Orders per month, average shipment value, ship method",
                "Current workflow (in 3 sentences)",
                "Top 3 pain points named",
                "Best quote captured verbatim",
                "Willingness to pay: stated number",
                "Beta interest: yes / maybe / no",
            ],
            styles["bullet"],
        )
    )

    s.append(p("Decision framework after 5 interviews", styles["h2"]))
    decision_rows = [
        ["3+ unprompted &ldquo;I&rsquo;d pay for this&rdquo;", "Build v1 as planned"],
        [
            "1–2 unprompted &ldquo;I&rsquo;d pay&rdquo;",
            "Build a stripped-down prototype first; re-validate with same cohort",
        ],
        [
            "0 unprompted &ldquo;I&rsquo;d pay&rdquo;",
            "Pause. Reframe problem. Talk to a different customer (forwarders?)",
        ],
        [
            "Strong signal for a different feature (duty calc, supplier translation)",
            "Note for v1.5 but stay focused on CBM core",
        ],
    ]
    s.append(
        make_table(
            ["Signal", "Action"],
            decision_rows,
            styles,
            col_widths=[3.4 * inch, 2.6 * inch],
        )
    )

    s.append(p("Common pitfalls to avoid", styles["h2"]))
    s.extend(
        bullets(
            [
                "Pitching instead of listening — people are polite, not honest",
                "Asking hypothetical questions (&ldquo;Would you use…&rdquo;) instead of past behaviour",
                "Accepting compliments as validation — only money or commitments are real",
                "Talking to friends and family — they want you to succeed, so they lie nicely",
                "Skipping the bad-case question — the worst story is where the real pain lives",
            ],
            styles["bullet"],
        )
    )

    return s


def main():
    doc = SimpleDocTemplate(
        OUTPUT,
        pagesize=A4,
        leftMargin=18 * mm,
        rightMargin=18 * mm,
        topMargin=22 * mm,
        bottomMargin=22 * mm,
        title="Cubed — CBM Estimator v1.0",
        author="Priselle Sourcing & Trade",
    )
    styles = build_styles()
    story = build_story(styles)
    doc.build(story, onFirstPage=cover_page, onLaterPages=header_footer)
    print(f"Wrote {OUTPUT}")


if __name__ == "__main__":
    main()
