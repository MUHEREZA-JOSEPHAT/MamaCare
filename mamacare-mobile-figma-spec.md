## Mamacare – Mobile App Figma Blueprint

> **Goal:** Mobile app (phone) UI for the Mamacare system, based on your existing web dashboard, so you can build a native‑feeling app (React Native / Flutter / Kotlin / Swift) without manually figuring out all screens from scratch.

---

### 1. Scope & Assumptions

- This blueprint targets a **Health Worker / Admin mobile app** (field use + supervisors), not the mother’s self‑service app.
- It reuses the **same data and flows** you already have:
  - Dashboard metrics
  - Mother registration wizard
  - Mothers list + mother profile
  - Health worker tools (tasks, alerts, quick actions)
  - AI Agents dashboard (simplified for mobile)
  - Reports & settings (mobile‑friendly versions)
- All sizes below assume **iPhone 13/14/15 frame (390 × 844)** in Figma. Android can be adapted after.

---

### 2. Figma Setup for Mobile

- **File name**: `Mamacare – Mobile App`
- **Pages**:
  - `00 – Mobile Style Guide`
  - `01 – Auth & Onboarding`
  - `02 – Main Navigation`
  - `03 – Dashboard (Mobile)`
  - `04 – Mothers (List + Profile)`
  - `05 – Registration (Wizard)`
  - `06 – Health Worker Tools`
  - `07 – AI & Alerts`
  - `08 – Reports (Summary)`
  - `09 – Settings`

- **Base frame**:
  - Use Figma frame: `iPhone 14 Pro` (390 × 844).

---

### 3. Mobile Style Guide (Page: `00 – Mobile Style Guide`)

- **Typography (Text Styles)**:
  - `Mobile / H1`: 24 pt, Bold, LH 30 (section titles).
  - `Mobile / H2`: 20 pt, Semibold, LH 26.
  - `Mobile / H3`: 16 pt, Semibold, LH 22 (card titles).
  - `Mobile / Body`: 14 pt, Regular, LH 20.
  - `Mobile / Caption`: 12 pt, Regular, LH 16.

- **Color styles** (reuse web system for consistency):
  - Same palette as `figma-design-spec.md`:
    - Primary: `#2563EB`, `#1D4ED8`
    - Accent: `#7C3AED`, `#06B6D4`
    - Success / Warning / Danger: `#10B981`, `#F59E0B`, `#EF4444`
    - Grays: `#F9FAFB`, `#F3F4F6`, `#E5E7EB`, `#374151`, `#1F2933`

- **Key mobile components (make as components/variants)**:
  - `Button / Primary / Mobile`:
    - Height 48, radius 12, full‑width option.
    - Gradient `#2563EB → #7C3AED`.
  - `Button / Secondary / Mobile`:
    - Outline or solid green `#10B981`.
  - `Chip / Risk` (Low/Medium/High).
  - `Chip / Status` (Active/Disabled).
  - `Card / List Item`:
    - 12 px radius, 12–16 px padding, leading icon/avatar + text + right chevron.
  - `Card / Metric`:
    - Small 1‑column card used inside scrollable lists.
  - `Bottom Nav / 5 tabs`:
    - Icons + labels, 5 equal segments.

---

### 4. App Structure & Navigation (Page: `02 – Main Navigation`)

Design this as a flow diagram + one “master shell” component.

- **Primary navigation pattern**: **Bottom tab bar** + **stack navigation**:
  - Tabs:
    1. `Home` (Dashboard)
    2. `Mothers`
    3. `Tasks`
    4. `AI`
    5. `More`

- **Component: `Screen / Shell`**:
  - Top: mobile app bar:
    - Title centered (e.g. “Dashboard”).
    - Left: optional back arrow.
    - Right: bell icon (alerts).
  - Content area: scrollable frame.
  - Bottom: `Bottom Nav` component.

Re‑use this shell for all main screens; replace the content frame per screen below.

---

### 5. Auth & Onboarding (Page: `01 – Auth & Onboarding`)

#### 5.1 Splash Screen

- Frame: `Splash`.
- Centered logo:
  - Shield icon in gradient circle.
  - Title: `Mamacare`.
  - Subtitle: `AI Maternal Care for Health Workers`.
- Simple loading indicator at bottom.

#### 5.2 Login Screen

- Title: `Sign in`.
- Fields:
  - Email / Phone.
  - Password.
  - “Remember me” toggle.
  - “Forgot password?” text link.
- Primary button: `Sign in`.
- Text link: `Need help? Contact admin`.

#### 5.3 Role Selection (optional, if you support multiple roles)

- Cards:
  - `Health Worker`
  - `Supervisor / Admin`
  - `AI Operations`
- Tapping sets context and goes to Home (Dashboard).

---

### 6. Dashboard (Mobile) (Page: `03 – Dashboard (Mobile)`)

Artboard: `Home – Dashboard`.

- App bar:
  - Title: `Dashboard`.
  - Subtitle (small): `Good morning, Dr. Sarah`.
  - Right icons: bell (alerts), small avatar.

- Content (scrollable):
  1. **Horizontal stat cards (carousel)**:
     - Cards for:
       - Active Mothers
       - Upcoming Visits
       - High‑Risk Cases
       - Missed Visits
     - Each card: big number, label, tiny “change this week”.
  2. **Today’s Overview Card**:
     - “Today” with date.
     - Two lines:
       - `23 Upcoming Visits`
       - `3 High‑Risk Alerts`.
  3. **Upcoming Visits List (preview)**:
     - `See all` link top‑right.
     - 3–5 list items, each:
       - Mother name + gestational age.
       - Time & clinic.
       - Chip “Today / Tomorrow”.
  4. **Recent Mothers Activity**:
     - List of mothers with last action: “Registered”, “Visited”, “Missed visit”.
  5. **Quick Actions row**:
     - 4 square buttons:
       - Register Mother
       - View Mothers
       - Open Tasks
       - AI Agents

---

### 7. Mothers: List & Profile (Page: `04 – Mothers (List + Profile)`)

#### 7.1 Mothers List

Artboard: `Mothers – List`.

- App bar:
  - Title: `Mothers`.
  - Right: search icon + filter icon.

- Content:
  - Search field at top (full‑width).
  - Filter chips row: `All`, `Low`, `Medium`, `High`, `Missed`.
  - List items (use `Card / List Item`):
    - Left: circular avatar with initials.
    - Text:
      - Line 1: Mother name + risk chip.
      - Line 2: `Village • Gestational age` (e.g. `Mukono Central • 24w`).
    - Right: next visit date (e.g. `28 Jan`).
  - Floating action button (FAB) bottom‑right: `+` to register new mother.

#### 7.2 Mother Profile – Overview (Mobile)

Artboard: `Mother Profile – Overview`.

- App bar:
  - Back arrow to Mothers list.
  - Title: `Sarah K.` with small `Profile` caption.
  - Right: `⋮` (more menu) for actions (Edit, Export, Print).

- Content:
  1. **Profile header card**:
     - Avatar, name, risk chip.
     - Row of micro‑metrics (age, gestational age, phone).
  2. **Next Visit card**:
     - Big date + time + location.
     - Button: `Schedule / Reschedule`.
  3. **Tab strip (segmented control)**:
     - `Overview`, `Timeline`, `Messages`, `Visits`, `Interactions`.
     - Use horizontal segmented control (like iOS).
  4. **Overview tab content** (first view):
     - 2‑column grid metrics (stacked for mobile): BP, Weight, Parity, Height.
     - Sections:
       - Personal Information (label/value list).
       - Pregnancy Information (EDD, LMP, registered date, assigned health worker).
  5. **Quick actions row** (sticky at bottom or near top):
     - Buttons: `Call`, `Message`, `Schedule Visit`, `Report Alert`.

Create separate artboards / variants for other tabs:

- `Timeline` → vertical list of trimester cards + ANC schedule.
- `Messages` → latest symptom + AI response + history list.
- `Visits` → upcoming + history list (mobile version of VisitsTab).
- `Interactions` → scrollable list of AI/system actions.

---

### 8. Registration Wizard (Mobile) (Page: `05 – Registration (Wizard)`)

Replace the 4 web steps with **4 full‑screen mobile steps**, each with:
- Top progress indicator: `Step 1 of 4`, etc.
- Title matching the BPR step text.
- Primary button bottom: `Next` or `Complete`.
- Secondary: `Back` / `Save Draft`.

#### Step 1 – Basic Info (Mobile)

- Title: `Mother Registration`.
- Subtitle: `Step 1 – Basic Info (BPR 7–8)`.
- Fields (scroll inside screen):
  - Full Name*.
  - Phone Number* with country prefix pill to the left (`+256` button).
  - Email (optional).
  - NIN (optional, with validation hint).
  - Address (multiline).
- Info chip: `System will validate details automatically (Step 8).`

#### Step 2 – Pregnancy

- Title: `Step 2 – Pregnancy Details`.
- Fields:
  - LMP* (date input).
  - EDD (auto‑filled but editable style).
  - Pregnancy Status (dropdown).
- Box: `System Calculations` showing:
  - Gestational Age.
  - Trimester.
- Textarea: Health History / Notes.
- Info chip: `ANC visits will be scheduled automatically.`

#### Step 3 – Location & Communication

- Title: `Step 3 – Location & Communication`.
- Fields:
  - Village / Parish*.
  - District.
  - GPS coordinates.
- Cards:
  - Communication channels (WhatsApp, SMS, Voice, Push) with toggles or chips.
  - Mobile app feature bullets (same content as web).

#### Step 4 – Review & Submit

- Title: `Step 4 – Review & Confirm`.
- Accordion sections:
  - Mother Info.
  - Pregnancy Info.
  - Location & ANC Schedule.
- At bottom:
  - Info list `What happens after submit` (steps 11–16).
  - Primary button: `Complete Registration`.

---

### 9. Health Worker Tools & Tasks (Page: `06 – Health Worker Tools`)

Tabs primarily affect the `Tasks` and `More` sections.

#### Tasks Tab

Artboard: `Tasks – Today`.

- App bar: `Today’s Tasks`.
- Filters: `All`, `High priority`, `Due today`.
- Task cards:
  - Title, small priority chip (High/Medium/Low).
  - Description.
  - Meta row: Mother name, village, due date.
  - Buttons: small `✓ Done`, phone icon.
- FAB: `+ New Task`.

#### More Tab

Artboard: `More – Menu`.

- Simple menu list:
  - `Health Worker Dashboard (summary)`
  - `Health Workers` (list / management).
  - `Clinics & Facilities`.
  - `Settings`.
  - `About Mamacare`.

---

### 10. AI & Alerts (Page: `07 – AI & Alerts`)

#### AI Tab – Summary

Artboard: `AI – Overview`.

- Top cards:
  - `AI Agents Active`, `Tasks Today`, `High‑Risk Flags`.
- List of agents:
  - Each item: name, status chip, section (B/D/E/G) tag, tasks completed.
- Button: `View Agent Activity`.

#### Alerts (from bell icon)

Artboard: `Alerts – List`.

- App bar: `Alerts`.
- Filter chips: `All`, `Danger`, `Reminders`, `Updates`.
- Alert list items:
  - Icon by type.
  - Title, short description, time.
  - Right: dot for unread.
- Tapping opens a detail sheet with recommended action.

---

### 11. Reports (Mobile Summary) (Page: `08 – Reports (Summary)`)

Artboard: `Reports – Overview`.

- App bar: `Reports`.
- Time range dropdown at top (Last 30 days, 90 days, etc.).
- Key metric cards stacked vertically:
  - Total Registrations.
  - Visit Completion Rate.
  - Average Risk Score.
  - Response Time.
- Simple mobile charts:
  - Scrollable mini bar chart (registrations vs visits).
  - Donut or pie for risk distribution.
- Lists:
  - Top Villages (name + registrations + completion).
  - Recent Alerts Summary (type + count + success rate).

---

### 12. Settings (Mobile) (Page: `09 – Settings`)

Artboard: `Settings – Main`.

- Sections (accordion or grouped lists):
  - General (language, timezone, theme).
  - Notifications (toggles for Email, SMS, WhatsApp, Voice).
  - Communication (channels + templates – show only the most critical ones on mobile).
  - Offline & Sync (offline mode, sync interval).

Use standard mobile patterns:
- List rows with left icon + title + subtitle + right chevron.
- Switches for toggles.

---

### 13. How to Use This in Figma

1. Create a Figma file `Mamacare – Mobile App`.
2. Build `00 – Mobile Style Guide` (colors, text styles, core components).
3. Create a `Screen / Shell` component with app bar + bottom navigation.
4. For each page above, create an **iPhone 14 frame**, place `Screen / Shell`, and fill the content area following the description.
5. Once built, you can:
   - Export frames as references for mobile developers.
   - Or plug into tools that generate React Native / Flutter layouts from Figma.

This blueprint mirrors your web system’s flows but adapts them to a **mobile‑first, thumb‑friendly** experience with minimal manual layout thinking required.

