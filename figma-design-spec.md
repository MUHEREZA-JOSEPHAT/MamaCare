## Mamacare (MaamaCare) – Figma Design Blueprint

> **Note:** This file is a **blueprint** for rebuilding your full UI inside Figma.  
> Figma `.fig` files are proprietary and can’t be generated directly here, but you can follow these specs (or feed the text into a “JSON/Prompt → Figma” plugin) to recreate the full system design.

---

### 1. Figma File Structure

- **Figma file name**: `Mamacare – Maternal Follow‑Up System`
- **Pages**:
  - `00 – Style Guide`
  - `01 – Shell & Navigation`
  - `02 – Dashboard`
  - `03 – Mother Registration Flow`
  - `04 – Mothers List & Profile`
  - `05 – Health Worker Dashboard`
  - `06 – AI Agents Dashboard`
  - `07 – Reports & Analytics`
  - `08 – Settings`

- **Frame size (desktop web)**:  
  - `Desktop / 1440 × 900` (use this for all main screens)  
  - Layout grid on main content frames: **12 columns**, margin 80, gutter 24.

---

### 2. Design System (Page: `00 – Style Guide`)

- **Typography (use as Figma Text Styles)**:
  - `Display / H1`: Inter / 32 px / Bold / Line height 40
  - `Heading / H2`: Inter / 24 px / Bold / LH 32
  - `Heading / H3`: Inter / 18 px / Semibold / LH 26
  - `Body / Regular`: Inter / 14 px / Regular / LH 20
  - `Body / Medium`: Inter / 14 px / Medium / LH 20
  - `Caption`: Inter / 12 px / Regular / LH 16

- **Color styles** (align with Tailwind used in code):
  - `Primary / 600` – `#2563EB` (blue-600)
  - `Primary / 700` – `#1D4ED8`
  - `Accent / Purple 600` – `#7C3AED`
  - `Accent / Cyan 500` – `#06B6D4`
  - `Success / 500` – `#10B981`
  - `Warning / 500` – `#F59E0B`
  - `Danger / 500` – `#EF4444`
  - `Gray / 50` – `#F9FAFB`
  - `Gray / 100` – `#F3F4F6`
  - `Gray / 200` – `#E5E7EB`
  - `Gray / 700` – `#374151`
  - `Gray / 800` – `#1F2933`
  - `Background / App gradient` – top: `#EFF6FF`, mid: `#EEF2FF`, bottom: `#F5F3FF`

- **Effects**:
  - `Card / Shadow`: 0, 12, 30, 0 / rgba(15, 23, 42, 0.10)
  - `Floating / Strong`: 0, 18, 45, 0 / rgba(15, 23, 42, 0.18)

- **Key components (make as Figma Components)**:
  - `Button / Primary`  
    - Height 40, 12 px horizontal padding, 8 px radius  
    - Fill: **linear gradient** left→right: `Primary / 600` → `Accent / Purple 600`  
    - Label: Body / Medium, white.
  - `Button / Secondary`  
    - Same but gradient `#10B981` → `#059669`.
  - `Chip / Status`  
    - Pill, 6 px radius, 20 px height; variants: `Low risk`, `Medium risk`, `High risk`, `Active`, `Disabled` with corresponding colors.
  - `Card / Base`  
    - Corner radius 16, white fill, subtle border (`Gray / 200`), Card shadow.

---

### 3. Shell & Navigation (Page: `01 – Shell & Navigation`)

Create components:

- **Component: `Layout / App Shell`**
  - Frame 1440 × 900 with background gradient: top-left `#EFF6FF` to bottom-right `#F5F3FF`.
  - Left: **Sidebar component** (fixed) 64–256 px wide.
  - Top of right area: **Header component** (sticky).
  - Center: `Content` auto-layout frame for each screen.

- **Component: `Nav / Sidebar`**
  - Height 900, width:
    - Expanded: 256 px, Collapsed: 80 px (create `Expanded` / `Collapsed` variants).
  - Background: dark gradient `#030712` → `#111827`.
  - Top “logo block”:
    - 40 × 40 rounded rectangle with gradient `#06B6D4` → `#2563EB`, icon `Shield`.
    - Text: **Mamacare** (H3 white) + caption `AI Maternal Care` (Caption / gray-400).
  - Nav items (Auto layout vertical, 8 px gap):
    - Each row 44 px high; icon left, label right.
    - Active state: rounded 12 px, background `rgba(34,197,235,0.15)` with 1 px border `rgba(34,197,235,0.4)`, text `Primary / 600`.
    - Items: `Dashboard`, `Register Mother`, `Mothers List`, `Create Health Worker`, `HealthWorkersList`, `Reports & Analytics`, `AI Agent`, `Settings`.
  - Bottom user profile block:
    - Avatar: 40 × 40 circle with `Dr.Yiga Jonathan M.` initials.
    - Name + role, and `Logout` icon button.

- **Component: `Header / TopBar`**
  - Full width on content area, height 64.
  - Left: title `Mama care Dashboard` (H2) + sub-row (Calendar icon + current date).
  - Right:
    - Search field (icon left, pill input).
    - Notification bell with red dot.
    - User name + small avatar (circular).

Use `App Shell` as the base for all subsequent pages.

---

### 4. Dashboard Screen (Page: `02 – Dashboard`)

- **Frame**: `Dashboard – Desktop` (1440 × 900) based on `App Shell`.
- **Content layout**:
  - Top welcome card:
    - Full-width card with gradient `white` → `#EFF6FF`, 24 px padding.
    - Left: icon badge (Shield) + text:
      - H2: “Welcome back, Dr. Sarah”
      - Body: “Here's what's happening with your mothers today”.
    - Right: system status pill (“System: Online” with green dot) + primary button “New Registration”.
  - Stats cards row (4 columns):
    - Use `Card / Base` with gradient backgrounds for key metrics:
      - `Active Mothers`
      - `Upcoming Visits`
      - (Add two more: `High-Risk Cases`, `Missed Visits`) — match the `StatsCard` code.
  - Main grid:
    - Left (2/3 width, vertical stack):
      - `Health Metrics Chart` card.
      - Row of two cards: `Danger Alerts` and `Upcoming Visits`.
      - `Weekly Schedule` card.
    - Right (1/3 width, vertical stack):
      - `Pregnancy Timeline` card.
      - `Recent Mothers` card.
      - `System Status` dark card with list of statuses (AI Agent, SMS Gateway, Database, Last Sync).

Use auto-layout in Figma for each “card” section so resizing is easy.

---

### 5. Mother Registration Flow (Page: `03 – Mother Registration Flow`)

Create **four frames** to represent each step of `MotherRegister`:

- **Frame 1: `Register – Step 1 / Basic Info`**
  - Breadcrumb / title: “Mother Registration” (H1) + BPR note (“Following BPR Steps 7–14”).
  - Under title: `StepIndicator` horizontal component:
    - 4 numbered circles with labels: `Basic Info`, `Pregnancy`, `Location`, `Review`.
    - Completed: green circle with check; active: blue filled; upcoming: gray.
  - Main card: title strip “Step 1: Mother Registration (BPR Step 7–8)” with shield icon.
  - Two-column form:
    - Left:
      - `Full Name*`
      - `Phone Number*` with country prefix badge `+256` inside field.
      - `Email Address` with helper text about mobile app login.
    - Right:
      - `National ID Number (NIN)`
      - `Complete Address` (multiline).
      - Info banner: “System Validation (Step 8)” blue info box.
  - Bottom sticky actions:
    - `Previous` (disabled style), `Save as Draft` (secondary), `Next Step` (primary gradient).

- **Frame 2: `Register – Step 2 / Pregnancy`**
  - Top banner: “Step 2: Pregnancy Setup (BPR Step 9–10)” with calendar icon.
  - Left column:
    - `Last Menstrual Period (LMP)*` (date picker).
    - `Expected Delivery Date (EDD)` (read-only style).
    - `Pregnancy Status` (select: Normal, High Risk, Multiple, Postpartum).
  - Right column:
    - Box `System Calculations (Step 10)` showing **Gestational Age** (e.g. `24 weeks`) and **Current Trimester** (First/Second/Third).
    - `Health History / Medical Notes` textarea.
    - Small purple info chip “ANC Schedule Generated” with count of visits.

- **Frame 3: `Register – Step 3 / Location & Communication`**
  - Green banner: “Step 3: Location & Communication”.
  - Left column:
    - `Village / Parish*`
    - `District`
    - `GPS Coordinates (Optional)`
  - Right column:
    - Yellow warning card about communication setup (Step 14).
    - White card with “Mobile App Features” bullet list.
    - Green card “Communication Channels” with chips: WhatsApp, SMS, Voice Call, Push Notification.

- **Frame 4: `Register – Step 4 / Review & Submit`**
  - Orange banner: “Step 4: Review & Submit (BPR Step 11–12)”.
  - Two-column review:
    - Left cards: `Mother Information`, `Pregnancy Details`.
    - Right cards: `Location Information`, `ANC Schedule (Generated)` with list of scheduled visits.
    - Bottom info card “System Actions on Submit” listing steps 11–16.
  - Footer actions: `Previous`, `Save as Draft`, `Complete Registration` (green gradient).

For each frame, mirror the field labels exactly from the React component so engineers can map 1:1.

---

### 6. Mothers List & Mother Profile (Page: `04 – Mothers List & Profile`)

- **Frame: `Mothers List`**
  - Uses `App Shell`.
  - Content: table listing mothers (columns: Name, Phone, Village, Risk, Next Visit, Actions).
  - Each row has clickable name that leads to Mother Profile (align with route `/mother/:id` in code).

- **Frame: `Mother Profile – Overview`**
  - Gradient header bar (blue → purple) with:
    - Back button (`←` Dashboard).
    - Title “Mother Profile” + subtitle “Health Worker View”.
    - Right: icon buttons (Print, Download, `Edit Profile` primary button).
  - Below: white profile card:
    - Avatar circle with `User` icon.
    - Name (`Sarah K.`) + colored risk pill (Low/Medium/High).
    - Small chips: age, gestational age, phone.
    - Side card “Next Visit” with date + “In 3 days”.
  - Tab bar: `Overview`, `Pregnancy Timeline`, `Messages & Symptoms`, `Visit Attendance`, `Interaction Log`.
  - **Overview tab layout**:
    - Top row: 4 metric cards (Gestational Age, Blood Pressure, Weight, Parity).
    - Two side-by-side detail cards: `Personal Information`, `Pregnancy Information`.
    - Bottom row: 4 quick-action buttons (Call Mother, Send Message, Schedule Visit, Report Alert).

- **Frames: other tabs**
  - `Pregnancy Timeline`:
    - Three trimester cards (First, Second, Third) with status badges.
    - `ANC Schedule` list with status chips (completed/scheduled/pending).
  - `Messages & Symptoms`:
    - Latest symptom report card (blue).
    - AI Response card (green).
    - `Message History` list of items with type + status chip.
  - `Visit Attendance`:
    - `Upcoming Visit` card with three action buttons (Mark as Attended / Reschedule / Mark as Missed).
    - Visit history list with attended/missed.
  - `Interaction Log`:
    - Colored activity cards for calls, AI actions, SMS, system events.
    - `AI Actions Audit Trail` table.

---

### 7. Health Worker Dashboard (Page: `05 – Health Worker Dashboard`)

- **Frame**: `Health Worker Dashboard – Desktop`.
- Header:
  - H2 “Health Worker Dashboard”.
  - Subtitle: “Tools and tasks for field health workers”.
  - Right: primary button “Daily Report”.
- Stats row (4 cards):
  - `Assigned Mothers`, `Today's Tasks`, `Pending Alerts`, `Completed Today`.
- Main grid:
  - Left (2/3): `Today's Tasks` card with:
    - Tabs: `All Tasks`, `Completed`.
    - Each task row: title + priority chip + description + meta (mother, village, due) + action buttons (complete, call).
    - “+ Add New Task” dashed button.
  - Right (1/3):
    - `Recent Alerts` card: list of alerts with severity icons and read dot.
    - `Quick Actions` grid: 4 square buttons (`Send Bulk SMS`, `Quick Call`, `Log Visit`, `Add Mother`).

---

### 8. AI Agents Dashboard (Page: `06 – AI Agents Dashboard`)

- **Frame**: `AI Agents Dashboard – Desktop`.
- Header: H2 “AI Agents Dashboard” + subtitle from code.
- Stats cards: `Total AI Agents`, `Active Agents`, `Total Tasks Completed`.
- Filter bar:
  - Buttons / selects: `All Agents`, `Section filter`, `Status filter`.
- AI Agents grid:
  - Card per agent with:
    - Name, status chip (active/inactive), health chip (healthy).
    - “Section X” pill.
    - Description.
    - Current Role, Last Activity, Tasks Completed.
    - Footnote mapping to BPR section.
- `Recent AI Agent Activities` table:
  - Columns: Time, Agent, Action, Description, Mother ID, Status.
- `BPR Process Legend` area:
  - Four mini cards for Sections B, D, E, G with description and which agents belong to each.

---

### 9. Reports & Analytics (Page: `07 – Reports & Analytics`)

- **Frame**: `Reports – Desktop`.
- Header:
  - H2 “Analytics & Reports”.
  - Right: date range select + `Export Report` button.
- Key Metrics row (4 cards):
  - `Total Registrations`, `Visit Completion Rate`, `Average Risk Score`, `Response Time` with trend icons (up/down) and colored badges.
- Charts grid:
  - Left: **Monthly Registrations & Visits** bar chart.
  - Right: **Risk Level Distribution** pie chart with legend.
- `Clinic Performance` card:
  - Bar chart of `Visit Completion Rate` for clinics.
- Two bottom cards:
  - `Top Performing Villages` list (village name, registrations, completion %).
  - `Alerts Summary (Last 30 Days)` with segmented bars showing counts & resolved %.

---

### 10. Settings (Page: `08 – Settings`)

- **Frame**: `Settings – Desktop`.
- Left: vertical tabs (`General`, `Notifications`, `Communication`, `Security`, `Health Workers`, `Clinics`) built from a side-card; active tab in primary color.
- Right: different content per tab:
  - `General`:
    - Language select, Time zone select, Theme (light/dark cards), toggles for Offline Mode & Auto Backup.
  - `Notifications`:
    - Stack of four rows (Email, SMS, WhatsApp, Voice Call) each with icon, description, and toggle.
  - `Communication`:
    - Sections: Reminder Channels (WhatsApp/SMS/Voice with language select + toggle), Message Templates (4 textareas), Scheduling & Timing (reminder timing selections), Test Communication (card with channel select + Send Test), Network Settings (Offline, Sync Interval, Auto Sync, Fallback Language).
  - `Health Workers`:
    - Table: Name, Role, Contact, Status, Actions (Edit/Remove).
  - `Clinics`:
    - Grid of small cards for each clinic with name, location, mothers count, status pill, and Edit button.

---

### 11. How to Use This File in Figma

- **Option 1 – Manual build (recommended for control)**:
  - Create a new Figma file named **“Mamacare – Maternal Follow‑Up System”**.
  - Recreate the **Style Guide** page and components first.
  - For each page above, create a **Frame 1440 × 900**, drop in the `App Shell` component, then build the content per section.

- **Option 2 – Use a “Text/JSON → Figma” plugin**:
  - Copy the relevant sections of this markdown (e.g., a single screen definition).
  - In Figma, open a plugin that can generate UI from prompts or JSON/markdown.
  - Paste the text as the plugin input to bootstrap the layout, then refine visually.

This blueprint covers the **entire React system** currently in your `MAMACAREO` project and maps 1:1 to the existing routes and components, so designers and developers can stay aligned.

