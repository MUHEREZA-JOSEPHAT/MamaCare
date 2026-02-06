## Mamacare – Adobe XD Design Blueprint

> **Important:** This is a **blueprint** for Adobe XD.  
> I can’t generate a real `.xd` binary file here, but you can follow this spec step‑by‑step (or paste it into an XD plugin that builds UIs from text) to recreate the full app as an XD file.

---

### 1. XD Document Setup

- **Create a new XD document**
  - Name: `Mamacare – Maternal Follow‑Up System`
  - Artboard presets:
    - Use **Web 1920** (1920 × 1080) for all main screens.

- **Artboard naming convention**
  - `00 – Style Guide`
  - `01 – Shell & Navigation`
  - `02 – Dashboard`
  - `03 – Mother Registration – Step 1`
  - `03 – Mother Registration – Step 2`
  - `03 – Mother Registration – Step 3`
  - `03 – Mother Registration – Step 4`
  - `04 – Mothers List`
  - `04 – Mother Profile – Overview`
  - `04 – Mother Profile – Other Tabs`
  - `05 – Health Worker Dashboard`
  - `06 – AI Agents Dashboard`
  - `07 – Reports & Analytics`
  - `08 – Settings`

- **Layout grid (for all main artboards)**
  - Columns: 12
  - Gutter: 24 px
  - Margins: 80 px left/right

---

### 2. Global Styles (Artboard: `00 – Style Guide`)

In XD, set these up in the **Assets** panel as Colors and Character Styles.

- **Fonts**
  - Use `Inter` or `Roboto` (if Inter not available).
  - Character styles:
    - `H1`: 32 pt, Bold, Line height ~40
    - `H2`: 24 pt, Bold, LH ~32
    - `H3`: 18 pt, Semibold, LH ~26
    - `Body / Regular`: 14 pt, Regular, LH ~20
    - `Body / Medium`: 14 pt, Medium, LH ~20
    - `Caption`: 12 pt, Regular, LH ~16

- **Color assets**
  - Primary:
    - `Primary / 600` – `#2563EB`
    - `Primary / 700` – `#1D4ED8`
  - Accents:
    - `Accent / Purple 600` – `#7C3AED`
    - `Accent / Cyan 500` – `#06B6D4`
  - Semantic:
    - `Success / 500` – `#10B981`
    - `Warning / 500` – `#F59E0B`
    - `Danger / 500` – `#EF4444`
  - Grays:
    - `Gray / 50` – `#F9FAFB`
    - `Gray / 100` – `#F3F4F6`
    - `Gray / 200` – `#E5E7EB`
    - `Gray / 700` – `#374151`
    - `Gray / 800` – `#1F2933`
  - Background gradient:
    - Top: `#EFF6FF`
    - Middle: `#EEF2FF`
    - Bottom: `#F5F3FF`

- **Common components (create as Components in XD)**
  - `Button / Primary`
    - Height 40, padding left/right 16, radius 8.
    - Fill: linear gradient left→right `#2563EB` → `#7C3AED`.
    - Label: 14 pt, Medium, White.
  - `Button / Secondary`
    - Same, but gradient `#10B981` → `#059669`.
  - `Chip / Status`
    - Height 24, radius 999 (pill).
    - Variants: `Low risk` (green), `Medium risk` (amber), `High risk` (red), `Active`, `Disabled`.
  - `Card / Base`
    - Radius 16, white fill, 1 px border `Gray / 200`, soft drop shadow (0, 12, 30, 10% black).

---

### 3. App Shell & Navigation (Artboard: `01 – Shell & Navigation`)

#### 3.1 Sidebar Component

- Create component `Sidebar / Desktop`:
  - Width (expanded): 256 px, Height: full artboard.
  - Background: vertical gradient `#030712` → `#111827`.
  - Top logo block:
    - 40×40 rounded rectangle, gradient `#06B6D4` → `#2563EB`, white shield icon.
    - Text: `Mamacare` (H3, white) and caption “AI Maternal Care” (Caption, gray-400).
  - Navigation section:
    - Items stacked with 8 px vertical gap.
    - Each item: 44 px height, icon left, label right.
    - Active style: rounded 12 px, semi‑transparent cyan background, 1 px cyan border.
    - Items/order:
      - Dashboard
      - Register Mother
      - Mothers List
      - Create Health Worker
      - HealthWorkersList
      - Reports & Analytics
      - AI Agent
      - Settings
  - Bottom user block:
    - 40×40 avatar circle with initials `Sd`.
    - Text: name `Dr.Yiga Jonathan M.` and role `system Admin`.
    - Logout icon button.

Create a second **variant** for collapsed sidebar (width ~80 px, only icons centered).

#### 3.2 Header Component

- Component: `Header / TopBar`
  - Height: 64 px, full width of page area.
  - Left:
    - H2: “Mama care Dashboard”.
    - Subtext row: calendar icon + current date text.
  - Right:
    - Search field: 280 px wide pill, search icon on left.
    - Notification icon with red dot.
    - User name + small circular avatar (`SM`).

#### 3.3 App Shell

- Component: `Layout / App Shell`
  - Place `Sidebar / Desktop` on left, `Header / TopBar` at top of remaining area.
  - Add a main `Content` group/frame under header to host each screen.

Use this shell as a base, then **duplicate artboards** and change only the `Content` area per screen below.

---

### 4. Dashboard (Artboard: `02 – Dashboard`)

Base: duplicate `App Shell`.

- **Top “Welcome” card**
  - Full width within content, 24 px padding, gradient `white` → light blue.
  - Left: shield icon badge + text:
    - H2: “Welcome back, Dr. Sarah”
    - Body: “Here's what's happening with your mothers today”.
  - Right:
    - Status pill: green dot + “System: Online”.
    - Primary button: “New Registration”.

- **Stats row (4 cards)**
  - Cards using `Card / Base`, 4 columns:
    - Active Mothers
    - Upcoming Visits
    - High‑Risk Cases
    - Missed Visits
  - Each card:
    - Big number, small “change” text, and subtle detail line.

- **Main grid**
  - Left column (~2/3 width):
    - Card: `Health Metrics Chart` (placeholder line/bar chart area).
    - Row of 2 cards:
      - `Danger Alerts`
      - `Upcoming Visits`
    - Card: `Weekly Schedule` (list of planned tasks/visits).
  - Right column (~1/3 width):
    - `Pregnancy Timeline` card (three steps with progress).
    - `Recent Mothers` card (list).
    - Dark `System Status` card with rows:
      - AI Agent – Active
      - SMS Gateway – 98% success
      - Database – Healthy
      - Last Sync – 2 mins ago

---

### 5. Mother Registration Flow (Artboards: `03 – …`)

Create 4 artboards based on the shell.

#### Step 1 – Basic Info (`03 – Mother Registration – Step 1`)

- Header:
  - H1: “Mother Registration”.
  - Subtitle: “Register new pregnant mother following the BPR process flow”.
  - Right: badge “MaamaCare System”.
- Step indicator:
  - Horizontal 4‑step timeline with circles labeled:
    - 1 Basic Info
    - 2 Pregnancy
    - 3 Location
    - 4 Review
- Main card:
  - Blue gradient header strip: “Step 1: Mother Registration (BPR Step 7-8)”.
  - Two‑column form:
    - Left:
      - Full Name*
      - Phone Number* (with +256 prefix badge inside input).
      - Email Address with helper text about mobile app login.
    - Right:
      - National ID Number (NIN).
      - Complete Address (multiline).
      - Blue info box “System Validation (Step 8)…”.
- Buttons at bottom:
  - Left: `Previous` (disabled).
  - Right: `Save as Draft` + `Next Step` (primary gradient).

#### Step 2 – Pregnancy (`03 – Mother Registration – Step 2`)

- Purple header strip: “Step 2: Pregnancy Setup (BPR Step 9-10)”.
- Left column:
  - `Last Menstrual Period (LMP)*` date field.
  - `Expected Delivery Date (EDD)` date field (style as read‑only).
  - `Pregnancy Status` dropdown.
- Right column:
  - “System Calculations (Step 10)” box with:
    - Gestational Age: `24 weeks` (example).
    - Current Trimester: `Second`.
  - `Health History / Medical Notes` textarea.
  - Purple info box “ANC Schedule Generated (X visits)”.

#### Step 3 – Location & Communication (`03 – Mother Registration – Step 3`)

- Green header strip: “Step 3: Location & Communication”.
- Left column:
  - Village / Parish*
  - District
  - GPS Coordinates.
- Right column:
  - Yellow info card about mobile app login / reminders.
  - White card listing “Mobile App Features” (3 bullet points).
  - Green card with channel chips: WhatsApp, SMS, Voice Call, Push Notification.

#### Step 4 – Review & Submit (`03 – Mother Registration – Step 4`)

- Orange header strip: “Step 4: Review & Submit (BPR Step 11-12)”.
- Two columns of summary cards:
  - Left:
    - Mother Information (Full Name, Phone, NIN, Email).
    - Pregnancy Details (LMP, EDD, Gestational Age, Trimester).
  - Right:
    - Location Information (Village, District, Address).
    - ANC Schedule: list of visits (Visit 1–4) with week and date.
    - Blue info card “System Actions on Submit” listing Steps 11–16.
- Footer buttons:
  - Previous, Save as Draft, Complete Registration (green gradient).

---

### 6. Mothers List & Mother Profile (Artboards: `04 – …`)

#### Mothers List (`04 – Mothers List`)

- Content:
  - Title: “Mothers List”.
  - Table:
    - Columns: Mother, Phone, Village, Risk, Next Visit, Actions.
    - Each row:
      - Left: avatar with initials + name.
      - Risk as status chip (Low/Medium/High).
      - Action button “View Profile”.

#### Mother Profile (`04 – Mother Profile – Overview`)

- Gradient header (blue → purple):
  - Back button (`← Dashboard`).
  - Title: “Mother Profile” + subtitle “Health Worker View”.
  - Right side: Print icon, Download icon, `Edit Profile` button.
- Profile card:
  - Left: circular avatar with user icon; name `Sarah K.`; risk chip.
  - Under name: three inline items – Age, Gestational Age, Phone.
  - Right: `Next Visit` mini card with date and “In 3 days”.
- Tab bar:
  - Tabs: Overview, Pregnancy Timeline, Messages & Symptoms, Visit Attendance, Interaction Log.
  - Use underline or pill for active tab.
- Overview content:
  - Row of 4 metric cards: Gestational Age, Blood Pressure, Weight, Parity.
  - Two info cards: Personal Information & Pregnancy Information (rows of label/value pairs).
  - Row of 4 quick action buttons: Call Mother, Send Message, Schedule Visit, Report Alert.

Create additional artboards (or states) for each tab:

- Pregnancy Timeline: 3 trimester cards + ANC schedule list.
- Messages & Symptoms: latest symptom card, AI response card, message history list.
- Visit Attendance: Upcoming Visit summary + Visit History list.
- Interaction Log: gradient activity cards + AI Actions Audit Trail table.

---

### 7. Health Worker Dashboard (Artboard: `05 – Health Worker Dashboard`)

- Header:
  - H2: “Health Worker Dashboard”.
  - Subtitle: “Tools and tasks for field health workers”.
  - Right: `Daily Report` primary button.
- Stats row:
  - `Assigned Mothers`, `Today's Tasks`, `Pending Alerts`, `Completed Today` (cards).
- Main:
  - Left (2/3): `Today's Tasks` card:
    - Tabs: All Tasks / Completed.
    - Each task row includes title, priority badge, description, mother name, village, due date, and two small icon buttons (check, phone).
    - “+ Add New Task” dashed outline button at bottom.
  - Right (1/3):
    - `Recent Alerts` card with stacked alert rows (danger/reminder/update).
    - `Quick Actions` card with 4 square actions: Send Bulk SMS, Quick Call, Log Visit, Add Mother.

---

### 8. AI Agents Dashboard (Artboard: `06 – AI Agents Dashboard`)

- Header:
  - H2: “AI Agents Dashboard”.
  - Subtitle from code: “Monitoring and management of AI agents in the MaamaCare system”.
- Top stats:
  - Total AI Agents, Active Agents, Total Tasks Completed (3 cards).
- Filter bar:
  - “All Agents” button, Section dropdown (B, D, E, G), Status dropdown (Active/Inactive).
- Agents grid:
  - Cards for each agent:
    - Name, status chip, health chip.
    - Small “Section X” pill.
    - Description.
    - Fields: Current Role, Last Activity, Tasks Completed.
    - Footnote: “BPR Process: [section name]”.
- Recent activities table:
  - Columns: Time, Agent, Action, Description, Mother ID, Status.
- BPR legend area:
  - 4 mini cards: Section B, D, E, G with explanation and agent names.

---

### 9. Reports & Analytics (Artboard: `07 – Reports & Analytics`)

- Header:
  - H2: “Analytics & Reports”.
  - Right: date range select (“Last 30 days”) + `Export Report` button.
- Key Metrics row:
  - 4 metric cards with title, value, change %, and trend arrow (up/down).
- Charts row:
  - Left: bar chart (Monthly Registrations & Visits).
  - Right: pie chart (Risk Level Distribution) with legend and total count.
- Clinic Performance card:
  - Bar chart showing Visit Completion Rate by clinic (Mukono HC, Nakifuma, etc.).
- Bottom two cards:
  - Top Performing Villages – list of rows with village, registrations, completion.
  - Alerts Summary – 4 rows with type (Danger Signs, Missed Appointments, etc.), count, resolved, progress bar.

---

### 10. Settings (Artboard: `08 – Settings`)

- Left: vertical tab list (General, Notifications, Communication, Security, Health Workers, Clinics).
  - Active tab has colored background and bold text.
- Right: content changes per tab.

Examples:

- General:
  - Language dropdown, Time Zone dropdown.
  - Theme selector (two cards: Light, Dark).
  - Toggles for Offline Mode and Auto Backup.
- Notifications:
  - 4 rows (Email, SMS, WhatsApp, Voice Call), each with icon, description, toggle.
- Communication:
  - Reminder Channels (WhatsApp/SMS/Voice with language drop‑downs and toggles).
  - Message Templates (Appointment Reminder, Danger Alert, Nutrition Advice, Follow‑up Check textareas).
  - Scheduling & Timing (appointment reminder lead time, daily health tips time, offline retry count, data saver toggle).
  - Test Communication card (select channel + “Send Test” button).
  - Network Settings (Offline Mode, Sync Interval, Auto Sync, Fallback Language).
- Health Workers:
  - Table of workers including Name, Role, Contact, Status pill, and Edit/Remove buttons.
- Clinics:
  - Grid of cards with clinic name, location, mothers count, status pill, and Edit.

---

### 11. Turning This Into a Real `.xd` File

- **Manual approach (most reliable)**:
  1. Open Adobe XD and create the `Mamacare – Maternal Follow‑Up System` document.
  2. Recreate the **Style Guide** first (colors, text styles, buttons, cards).
  3. Build the `App Shell` (Sidebar + Header).
  4. Duplicate that shell artboard for each screen listed and design the content per sections above.
  5. Save the document as `Mamacare.xd`.

- **If you use XD plugins / AI tools**:
  - Copy relevant parts of this blueprint into the plugin’s prompt or input field.
  - Let the plugin generate base layouts, then adjust to match this spec and your React implementation.

This blueprint mirrors your current React UI structure, so your XD file will line up directly with the components and flows in the `MAMACAREO` codebase.

