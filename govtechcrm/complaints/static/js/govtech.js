/**
 * GovTech CRM - Master Multilingual & Accessibility Controller
 * Complete UI Dynamic Translation Engine for 7 Languages:
 * English (en), Hindi (hi), Marathi (mr), Sanskrit (sa), Tamil (ta), Telugu (te), Bengali (bn)
 */

const GovTechTranslations = {
    en: {
        // Nav & Header
        portal_title: "GovTech CRM",
        portal_sub: "Citizen Grievance Redressal",
        official_gov: "Government of India | Official Civic Redressal Cell",
        national_helpline: "National Helpline: 1800-11-4000 (Toll Free)",
        text_size: "Text Size:",
        high_contrast: "Contrast",
        nav_home: "Home",
        nav_dashboard: "Citizen Portal",
        nav_admin: "Admin Dashboard",
        nav_track: "Track Grievance",
        nav_about: "About",
        nav_contact: "Helpline",
        nav_login: "Login",
        nav_register: "Register",
        nav_logout: "Logout",
        
        // Home Page
        namaskaram: "नमस्कारम्",
        hero_tagline: "Empowering Every Citizen with Transparent, Time-Bound Grievance Redressal",
        hero_desc: "A unified digital governance platform connecting citizens directly with municipal, state, and central departments. Submit complaints, track status in real-time, and ensure accountability through SLA-backed resolution.",
        btn_login: "Login",
        btn_register: "Register",
        btn_about_modal: "About GovTech CRM",
        btn_contact_modal: "Helpline & Contact",
        track_quick_placeholder: "Enter Grievance ID (e.g. 1, 2, 102)...",
        track_quick_btn: "Track Grievance",
        quick_demo_label: "Quick Demo Access:",
        demo_citizen_btn: "Demo Citizen Portal",
        demo_admin_btn: "Demo Admin Dashboard",
        stat_total_registered: "Total Grievances Registered",
        stat_redressed: "Successfully Redressed",
        stat_under_investigation: "Under Investigation",
        stat_sla_compliance: "SLA Compliance Rate",
        process_badge: "Transparent Process",
        process_heading: "How GovTech CRM Resolves Your Grievance",
        process_sub: "A streamlined 4-step digital journey ensuring time-bound redressal.",
        step1_title: "1. Submit Grievance",
        step1_desc: "Describe the issue in your local language or use Voice Input. Attach photos, videos, or documents.",
        step2_title: "2. AI Auto-Routing",
        step2_desc: "Smart category classification routes the grievance to the respective department with SLA deadline assigned.",
        step3_title: "3. On-Ground Action",
        step3_desc: "Departmental officers inspect the site, log progress remarks, and upload resolution verification proofs.",
        step4_title: "4. Redressal & Feedback",
        step4_desc: "The citizen receives an instant notification upon resolution and can review officer remarks.",
        dept_badge: "Departments & Domains",
        dept_heading: "Major Public Services Covered",
        dept_sub: "Instant routing across urban and rural administrative authorities.",
        dept_water: "Water Supply",
        dept_water_sub: "Pipelines, Quality & Billing",
        dept_elec: "Electricity & Power",
        dept_elec_sub: "Outages, Metering & Transformers",
        dept_roads: "Roads & PWD",
        dept_roads_sub: "Potholes, Streetlights & Bridges",
        dept_sanitation: "Sanitation & Waste",
        dept_sanitation_sub: "Garbage Clearance & Drainage",

        // Login Page
        login_title: "Portal Login",
        login_sub: "Secure Citizen & Administrative Access",
        role_label: "Select Role",
        role_citizen_opt: "Citizen / General User",
        role_admin_opt: "Administrator / Grievance Officer",
        login_id_label: "Login ID / Username",
        login_id_placeholder: "Enter your username or ID",
        password_label: "Password",
        password_placeholder: "Enter password",
        forgot_password_link: "Forgot Password?",
        remember_me_label: "Keep me signed in on this civic device",
        login_btn: "Sign In to GovTech",
        quick_demo_login_label: "Quick 1-Click Evaluation Logins:",
        no_account_text: "Don't have a GovTech CRM account?",
        sign_up_link: "Register here",
        forgot_modal_title: "Reset GovTech Credentials",
        forgot_modal_desc: "Enter your registered Mobile Number or Email ID. An OTP will be dispatched via government SMS gateway for instant credential verification.",
        forgot_input_label: "Registered Mobile or Email",
        forgot_admin_notice: "For administrative credentials, please contact your District Nodal Officer.",
        forgot_cancel_btn: "Cancel",
        forgot_submit_btn: "Send OTP",

        // Registration Page
        register_title: "Citizen & Officer Registration",
        register_sub: "Create your unified civic profile for transparent grievance redressal",
        reg_role_label: "Registering As",
        reg_role_hint: "Select 'Citizen' for grievance filing, or 'Officer' for department resolution.",
        reg_username_label: "Desired Login ID / Username",
        reg_fullname_label: "Full Legal Name",
        reg_fullname_placeholder: "Enter full legal name",
        reg_email_label: "Email Address",
        reg_email_placeholder: "name@example.com",
        reg_mobile_label: "Mobile Number (10 Digits)",
        reg_mobile_placeholder: "10-digit mobile number",
        reg_district_label: "District / City",
        reg_district_placeholder: "District / City",
        reg_address_label: "Residential / Office Address",
        reg_address_placeholder: "Residential / Office Address",
        reg_password1_label: "Password",
        reg_password1_hint: "At least 8 characters recommended.",
        reg_password2_label: "Confirm Password",
        reg_terms_label: "I solemnly affirm that the information provided is true to the best of my knowledge and comply with Indian IT & Grievance Guidelines.",
        reg_submit_btn: "Register Civic Account",
        already_account_text: "Already have an account?",
        login_here_link: "Sign in here",

        // Citizen Dashboard
        citizen_welcome: "Namaste,",
        verified_citizen_badge: "Verified Citizen",
        citizen_id_label: "Citizen ID:",
        btn_file_grievance: "File New Grievance",
        kpi_total_submitted: "Total Submitted",
        kpi_pending_triage: "Pending Triage",
        kpi_in_progress: "In Progress",
        kpi_resolved: "Resolved",
        history_title: "My Grievance History",
        search_grievances_placeholder: "Search your grievances by ID, keyword, or department...",
        th_id_title: "ID & Title",
        th_category: "Category",
        th_status: "Status",
        th_sla_target: "SLA Target",
        th_action: "Action",
        btn_track: "Track",
        no_grievances_title: "No Grievances Lodged Yet",
        no_grievances_desc: "Have an issue in your locality? Submit a grievance to get it redressed quickly under government SLAs.",
        btn_file_first: "File First Grievance",
        updates_title: "Updates & Notifications",
        unread_badge: "New",
        mark_as_read: "Mark as read",
        no_updates_desc: "No recent notifications. Updates on your grievances will appear here in real time.",
        support_title: "Need Grievance Assistance?",
        support_desc: "You can dial our 24x7 toll-free helpline or request a call back from your district nodal officer.",
        view_nodal_btn: "View District Nodal Centers",

        // Complaint Submission Form Modal
        modal_file_title: "Lodge New Grievance",
        modal_file_desc: "Please provide accurate details of the issue. You can use the Voice Input button to dictate in Hindi or English, and attach photos/videos as evidence.",
        field_title_label: "Grievance Title",
        field_name_label: "Citizen Name",
        field_lang_label: "Submission Language",
        field_category_label: "Department / Category",
        field_priority_label: "Urgency / Priority",
        field_location_label: "Incident Location / Ward / Pincode",
        field_desc_label: "Detailed Grievance Description",
        field_evidence_label: "Attach Evidence (Photo / Video / Document)",
        evidence_hint: "Supported formats: JPG, PNG, MP4, WebM, PDF. Max size: 25MB.",
        btn_voice_input: "Voice Input",
        btn_voice_listening: "Listening... Speak now",
        voice_hint: "Click 'Voice Input' to speak in Hindi, Marathi, or English directly into the microphone.",
        btn_cancel: "Cancel",
        btn_submit_grievance: "Submit Grievance",

        // Admin Dashboard
        admin_console_title: "Grievance Redressal Administration",
        admin_badge: "Officer Level Access",
        admin_sub: "Central Monitoring System | SLA Compliance & Departmental Action Console",
        btn_export_csv: "Export Excel / CSV",
        btn_print_pdf: "Print / PDF Report",
        kpi_total_inflow: "Total Grievances",
        kpi_pending_action: "Pending Triage",
        kpi_under_investigation: "In Progress",
        kpi_resolved_cases: "Resolved Redressed",
        kpi_sla_breaches: "SLA Breaches",
        kpi_sla_score: "SLA Adherence",
        filter_search_placeholder: "Search by ID, citizen, title...",
        opt_all_categories: "All Categories",
        opt_all_statuses: "All Statuses",
        opt_all_sla: "All SLA Statuses",
        filter_location_placeholder: "Filter by Location/District",
        opt_sla_ontrack: "Within SLA",
        opt_sla_approaching: "Approaching Deadline",
        opt_sla_breached: "SLA Breached (Urgent)",
        btn_apply_filter: "Filter",
        records_title: "Grievance Redressal Records",
        th_officer_action: "Review & Update",
        btn_review_action: "Review & Action",
        chart_category_title: "Complaints by Category",
        chart_status_title: "Resolution Status Distribution",
        chart_priority_title: "Inflow by Priority",
        modal_review_title: "Review Grievance",
        lbl_citizen_name: "Citizen Name:",
        lbl_location_ward: "Location / Ward:",
        lbl_dept: "Department:",
        lbl_lodged_on: "Lodged On:",
        lbl_original_text: "Original Grievance Text:",
        lbl_translated_text: "Auto-Translated into English:",
        lbl_evidence: "Attached Evidence:",
        lbl_no_media: "No media attachment uploaded.",
        lbl_update_status: "Update Resolution Status:",
        lbl_reassign_dept: "Reassign Department:",
        lbl_admin_remarks: "Official Remarks / Resolution Details:",
        admin_remarks_placeholder: "Provide action notes, nodal officer report, or resolution summary. (Citizen will be notified)",
        btn_save_notify: "Save & Notify Citizen",

        // Track Page
        track_page_title: "Track Grievance Redressal Status",
        track_card_label: "Track Another Grievance by ID:",
        track_input_placeholder: "Enter Grievance Reference ID (e.g. 1, 2, 102)",
        btn_track_now: "Track Now",
        timeline_heading: "Grievance Life Cycle & Progress Tracker",
        stage_lodged: "Lodged",
        stage_assigned: "Auto-Assigned",
        stage_inprogress: "In Progress",
        stage_action: "Action Taken",
        stage_resolved: "Resolved",
        sla_box_resolved: "Grievance Successfully Redressed within Government SLA",
        sla_box_breached: "SLA Target Date Breached — Automatically Escalated to District Collector",
        sla_box_approaching: "SLA Approaching Deadline — High Priority Redressal Active",
        sla_box_ontrack: "SLA Active: Expected Target Completion in Days",
        target_date_label: "Target Completion Date:",
        th_citizen_name: "Citizen Name",
        th_assigned_dept: "Assigned Authority",
        th_location: "Location / Ward",
        th_language: "Submission Language",
        th_citizen_desc: "Citizen Description",
        th_translated_desc: "Auto-Translated (EN)",
        th_admin_remarks: "Official Redressal Remarks",
        btn_return_dashboard: "Return to Dashboard",
        btn_confirm_resolved: "Confirm & Mark Resolved",
        track_empty_title: "Track Your Grievance Status",
        track_empty_desc: "Please enter a valid Grievance ID in the search box above to inspect real-time progress, assigned departmental authority, and resolution remarks.",

        // Status & SLA
        status_pending: "Pending",
        status_in_progress: "In Progress",
        status_resolved: "Resolved",
        sla_on_track: "Within SLA",
        sla_approaching: "Approaching SLA",
        sla_breached: "SLA Breached",

        // Categories
        cat_water: "Water Supply & Quality",
        cat_electricity: "Electricity & Power Supply",
        cat_roads: "Roads & Infrastructure",
        cat_sanitation: "Sanitation & Solid Waste",
        cat_health: "Healthcare & Hospitals",
        cat_revenue: "Revenue & Land Records",
        cat_education: "Public Education & Schools",
        cat_other: "General Administration & Other",

        // Priority
        prio_low: "Low",
        prio_medium: "Medium",
        prio_high: "High",
        prio_emergency: "Emergency"
    },

    hi: {
        // Nav & Header
        portal_title: "गव-टेक सीआरएम",
        portal_sub: "नागरिक शिकायत निवारण मंच",
        official_gov: "भारत सरकार | आधिकारिक नागरिक शिकायत निवारण प्रकोष्ठ",
        national_helpline: "राष्ट्रीय हेल्पलाइन: 1800-11-4000 (टोल फ्री)",
        text_size: "अक्षर आकार:",
        high_contrast: "कंट्रास्ट",
        nav_home: "मुखपृष्ठ",
        nav_dashboard: "नागरिक पोर्टल",
        nav_admin: "प्रशासन डैशबोर्ड",
        nav_track: "शिकायत ट्रैक करें",
        nav_about: "परिचय",
        nav_contact: "हेल्पलाइन",
        nav_login: "लॉग इन",
        nav_register: "पंजीकरण",
        nav_logout: "लॉग आउट",
        
        // Home Page
        namaskaram: "नमस्कारम्",
        hero_tagline: "हर नागरिक को पारदर्शी, समयबद्ध शिकायत निवारण से सशक्त बनाना",
        hero_desc: "नागरिकों को नगर निगम, राज्य और केंद्रीय विभागों से सीधे जोड़ने वाला एकीकृत डिजिटल मंच। शिकायत दर्ज करें, स्थिति ट्रैक करें एवं पारदर्शी सेवा प्राप्त करें।",
        btn_login: "लॉग इन",
        btn_register: "पंजीकरण",
        btn_about_modal: "गव-टेक सीआरएम के बारे में",
        btn_contact_modal: "हेल्पलाइन एवं संपर्क",
        track_quick_placeholder: "शिकायत आईडी दर्ज करें (उदा. 1, 2, 102)...",
        track_quick_btn: "शिकायत ट्रैक करें",
        quick_demo_label: "त्वरित डेमो पहुंच:",
        demo_citizen_btn: "डेमो नागरिक पोर्टल",
        demo_admin_btn: "डेमो प्रशासन डैशबोर्ड",
        stat_total_registered: "कुल पंजीकृत शिकायतें",
        stat_redressed: "सफलतापूर्वक निवारित",
        stat_under_investigation: "जांच एवं प्रक्रियाधीन",
        stat_sla_compliance: "एसएलए अनुपालन दर",
        process_badge: "पारदर्शी प्रक्रिया",
        process_heading: "गव-टेक सीआरएम आपकी शिकायत का समाधान कैसे करता है",
        process_sub: "समयबद्ध निवारण सुनिश्चित करने वाली 4-चरणीय डिजिटल यात्रा।",
        step1_title: "1. शिकायत दर्ज करें",
        step1_desc: "अपनी स्थानीय भाषा में विवरण लिखें या वॉइस इनपुट का उपयोग करें। फोटो, वीडियो या दस्तावेज संलग्न करें।",
        step2_title: "2. स्वचालित विभाग आवंटन",
        step2_desc: "स्मार्ट वर्गीकरण शिकायत को संबंधित विभाग को समय सीमा (एस.एल.ए.) के साथ आवंटित करता है।",
        step3_title: "3. जमीनी कार्रवाई",
        step3_desc: "विभागीय अधिकारी स्थल का निरीक्षण करते हैं, प्रगति दर्ज करते हैं और समाधान साक्ष्य अपलोड करते हैं।",
        step4_title: "4. समाधान एवं पुष्टि",
        step4_desc: "नागरिक को समाधान पर त्वरित सूचना प्राप्त होती है और वे अधिकारी की टिप्पणी देख सकते हैं।",
        dept_badge: "विभाग एवं कार्यक्षेत्र",
        dept_heading: "प्रमुख जनसेवाएं",
        dept_sub: "शहरी एवं ग्रामीण प्रशासनिक प्राधिकरणों के माध्यम से त्वरित निवारण।",
        dept_water: "जल आपूर्ति",
        dept_water_sub: "पाइपलाइन, गुणवत्ता एवं बिलिंग",
        dept_elec: "विद्युत एवं ऊर्जा",
        dept_elec_sub: "कटौती, मीटरिंग एवं ट्रांसफार्मर",
        dept_roads: "सड़कें एवं लोक निर्माण",
        dept_roads_sub: "गड्ढे, स्ट्रीट लाइट एवं पुल",
        dept_sanitation: "स्वच्छता एवं अपशिष्ट",
        dept_sanitation_sub: "कचरा उठान एवं जल निकासी",

        // Login Page
        login_title: "पोर्टल लॉग इन",
        login_sub: "सुरक्षित नागरिक एवं प्रशासनिक पहुंच",
        role_label: "भूमिका का चयन करें",
        role_citizen_opt: "नागरिक / सामान्य उपयोगकर्ता",
        role_admin_opt: "प्रशासक / शिकायत निवारण अधिकारी",
        login_id_label: "लॉग इन आईडी / उपयोगकर्ता नाम",
        login_id_placeholder: "अपना उपयोगकर्ता नाम या आईडी दर्ज करें",
        password_label: "पासवर्ड",
        password_placeholder: "पासवर्ड दर्ज करें",
        forgot_password_link: "पासवर्ड भूल गए?",
        remember_me_label: "मुझे इस डिवाइस पर साइन इन रखें",
        login_btn: "गव-टेक में प्रवेश करें",
        quick_demo_login_label: "1-क्लिक त्वरित डेमो लॉग इन:",
        no_account_text: "खाता नहीं है?",
        sign_up_link: "यहाँ पंजीकरण करें",
        forgot_modal_title: "प्रमाणपत्र रीसेट करें",
        forgot_modal_desc: "अपना पंजीकृत मोबाइल या ईमेल दर्ज करें। सत्यापन के लिए ओटीपी भेजा जाएगा।",
        forgot_input_label: "पंजीकृत मोबाइल या ईमेल",
        forgot_admin_notice: "प्रशासनिक प्रमाणपत्रों के लिए जिला नोडल अधिकारी से संपर्क करें।",
        forgot_cancel_btn: "रद्द करें",
        forgot_submit_btn: "ओटीपी भेजें",

        // Registration Page
        register_title: "नागरिक एवं अधिकारी पंजीकरण",
        register_sub: "पारदर्शी शिकायत निवारण के लिए अपनी प्रोफ़ाइल बनाएं",
        reg_role_label: "किस रूप में पंजीकरण कर रहे हैं",
        reg_role_hint: "शिकायत के लिए 'नागरिक', निवारण के लिए 'अधिकारी' चुनें।",
        reg_username_label: "लॉग इन आईडी / उपयोगकर्ता नाम",
        reg_fullname_label: "पूरा कानूनी नाम",
        reg_fullname_placeholder: "पूरा कानूनी नाम दर्ज करें",
        reg_email_label: "ईमेल पता",
        reg_email_placeholder: "name@example.com",
        reg_mobile_label: "मोबाइल नंबर (10 अंक)",
        reg_mobile_placeholder: "10 अंकों का मोबाइल नंबर",
        reg_district_label: "जिला / शहर",
        reg_district_placeholder: "जिला या शहर",
        reg_address_label: "आवासीय / कार्यालय का पता",
        reg_address_placeholder: "पूरा पता दर्ज करें",
        reg_password1_label: "पासवर्ड",
        reg_password1_hint: "कम से कम 8 अक्षर अनुशंसित।",
        reg_password2_label: "पासवर्ड की पुष्टि करें",
        reg_terms_label: "मैं प्रमाणित करता/करती हूँ कि दी गई जानकारी सत्य है एवं मैं नियमों का पालन करूँगा/करूँगी।",
        reg_submit_btn: "नागरिक खाता बनाएं",
        already_account_text: "पहले से खाता है?",
        login_here_link: "यहाँ लॉग इन करें",

        // Citizen Dashboard
        citizen_welcome: "नमस्ते,",
        verified_citizen_badge: "सत्यापित नागरिक",
        citizen_id_label: "नागरिक आईडी:",
        btn_file_grievance: "नई शिकायत दर्ज करें",
        kpi_total_submitted: "कुल प्रस्तुत",
        kpi_pending_triage: "जांच लंबित",
        kpi_in_progress: "प्रगति पर",
        kpi_resolved: "निवारित",
        history_title: "मेरी शिकायत इतिहास",
        search_grievances_placeholder: "आईडी, कीवर्ड या विभाग द्वारा खोजें...",
        th_id_title: "आईडी एवं शीर्षक",
        th_category: "श्रेणी",
        th_status: "स्थिति",
        th_sla_target: "एस.एल.ए लक्ष्य",
        th_action: "कार्रवाई",
        btn_track: "ट्रैक करें",
        no_grievances_title: "कोई शिकायत दर्ज नहीं है",
        no_grievances_desc: "क्या आपके क्षेत्र में कोई समस्या है? समयबद्ध समाधान हेतु शिकायत दर्ज करें।",
        btn_file_first: "पहली शिकायत दर्ज करें",
        updates_title: "अपडेट एवं सूचनाएं",
        unread_badge: "नई",
        mark_as_read: "पढ़ा हुआ चिह्नित करें",
        no_updates_desc: "कोई नई सूचना नहीं है। आपकी शिकायतों के अपडेट यहां दिखाई देंगे।",
        support_title: "शिकायत सहायता चाहिए?",
        support_desc: "आप 24x7 टोल-फ्री हेल्पलाइन पर कॉल कर सकते हैं।",
        view_nodal_btn: "जिला नोडल केंद्र देखें",

        // Form Modal
        modal_file_title: "नई शिकायत दर्ज करें",
        modal_file_desc: "कृपया सटीक जानकारी दें। आप हिंदी या अंग्रेजी में वॉइस इनपुट का उपयोग कर सकते हैं।",
        field_title_label: "शिकायत का शीर्षक",
        field_name_label: "नागरिक का नाम",
        field_lang_label: "प्रस्तुतीकरण भाषा",
        field_category_label: "विभाग / श्रेणी",
        field_priority_label: "प्राथमिकता / तात्कालिकता",
        field_location_label: "घटना स्थल / वार्ड / पिनकोड",
        field_desc_label: "विस्तृत शिकायत विवरण",
        field_evidence_label: "साक्ष्य संलग्न करें (फोटो / वीडियो / दस्तावेज)",
        evidence_hint: "समर्थित प्रारूप: JPG, PNG, MP4, WebM, PDF. अधिकतम: 25MB.",
        btn_voice_input: "वॉइस इनपुट",
        btn_voice_listening: "सुन रहे हैं... बोलिए",
        voice_hint: "माइक पर क्लिक करें और सीधे हिंदी, मराठी या अंग्रेजी में बोलें।",
        btn_cancel: "रद्द करें",
        btn_submit_grievance: "शिकायत प्रस्तुत करें",

        // Admin Dashboard
        admin_console_title: "शिकायत निवारण प्रशासन",
        admin_badge: "अधिकारी स्तर पहुंच",
        admin_sub: "केंद्रीय निगरानी प्रणाली | एस.एल.ए अनुपालन एवं विभागीय कार्रवाई कंसोल",
        btn_export_csv: "एक्सेल / सीएसवी निर्यात",
        btn_print_pdf: "प्रिंट / पीडीएफ रिपोर्ट",
        kpi_total_inflow: "कुल शिकायतें",
        kpi_pending_action: "लंबित कार्रवाई",
        kpi_under_investigation: "प्रगति पर",
        kpi_resolved_cases: "निवारित मामले",
        kpi_sla_breaches: "समय-सीमा उल्लंघन",
        kpi_sla_score: "एस.एल.ए स्कोर",
        filter_search_placeholder: "आईडी, नागरिक, शीर्षक से खोजें...",
        opt_all_categories: "सभी श्रेणियां",
        opt_all_statuses: "सभी स्थितियां",
        opt_all_sla: "सभी एस.एल.ए स्थितियां",
        filter_location_placeholder: "स्थान/जिला द्वारा फ़िल्टर करें",
        opt_sla_ontrack: "समय सीमा में",
        opt_sla_approaching: "समय समाप्त होने वाला है",
        opt_sla_breached: "समय सीमा पार (अति आवश्यक)",
        btn_apply_filter: "फ़िल्टर करें",
        records_title: "शिकायत निवारण अभिलेख",
        th_officer_action: "समीक्षा एवं कार्रवाई",
        btn_review_action: "समीक्षा एवं कार्रवाई",
        chart_category_title: "श्रेणी अनुसार शिकायतें",
        chart_status_title: "स्थिति वितरण",
        chart_priority_title: "प्राथमिकता अनुसार प्रवाह",
        modal_review_title: "शिकायत की समीक्षा",
        lbl_citizen_name: "नागरिक का नाम:",
        lbl_location_ward: "स्थान / वार्ड:",
        lbl_dept: "विभाग:",
        lbl_lodged_on: "दर्ज की गई तिथि:",
        lbl_original_text: "मूल शिकायत पाठ:",
        lbl_translated_text: "अंग्रेजी में अनुवाद:",
        lbl_evidence: "संलग्न साक्ष्य:",
        lbl_no_media: "कोई साक्ष्य अपलोड नहीं किया गया।",
        lbl_update_status: "निवारण स्थिति अद्यतन करें:",
        lbl_reassign_dept: "विभाग पुनः आवंटित करें:",
        lbl_admin_remarks: "आधिकारिक टिप्पणी / समाधान विवरण:",
        admin_remarks_placeholder: "कार्रवाई नोट या समाधान सारांश लिखें (नागरिक को सूचित किया जाएगा)",
        btn_save_notify: "सुरक्षित करें एवं नागरिक को सूचित करें",

        // Track Page
        track_page_title: "शिकायत निवारण स्थिति ट्रैक करें",
        track_card_label: "आईडी द्वारा अन्य शिकायत ट्रैक करें:",
        track_input_placeholder: "शिकायत संदर्भ आईडी दर्ज करें (उदा. 1, 2, 102)",
        btn_track_now: "अब ट्रैक करें",
        timeline_heading: "शिकायत जीवन चक्र एवं प्रगति ट्रैकर",
        stage_lodged: "दर्ज की गई",
        stage_assigned: "विभाग आवंटित",
        stage_inprogress: "प्रगति पर",
        stage_action: "कार्रवाई की गई",
        stage_resolved: "निवारित",
        sla_box_resolved: "सरकारी एस.एल.ए के तहत शिकायत का सफलतापूर्वक निवारण किया गया",
        sla_box_breached: "एस.एल.ए समय-सीमा पार — स्वतः जिलाधिकारी को प्रेषित",
        sla_box_approaching: "एस.एल.ए समय-सीमा निकट — उच्च प्राथमिकता निवारण सक्रिय",
        sla_box_ontrack: "एस.एल.ए सक्रिय: अपेक्षित समाधान शेष दिन",
        target_date_label: "लक्षित पूर्णता तिथि:",
        th_citizen_name: "नागरिक का नाम",
        th_assigned_dept: "आवंटित प्राधिकरण",
        th_location: "स्थान / वार्ड",
        th_language: "प्रस्तुतीकरण भाषा",
        th_citizen_desc: "नागरिक विवरण",
        th_translated_desc: "अंग्रेजी अनुवाद",
        th_admin_remarks: "आधिकारिक समाधान टिप्पणी",
        btn_return_dashboard: "डैशबोर्ड पर लौटें",
        btn_confirm_resolved: "पुष्टि करें एवं निवारित चिह्नित करें",
        track_empty_title: "अपनी शिकायत स्थिति ट्रैक करें",
        track_empty_desc: "प्रगति और विभागीय टिप्पणी देखने के लिए ऊपर खोज बॉक्स में वैध शिकायत आईडी दर्ज करें।",

        // Status & SLA
        status_pending: "लंबित",
        status_in_progress: "प्रगति पर",
        status_resolved: "निवारित",
        sla_on_track: "समय सीमा में",
        sla_approaching: "समय समाप्त होने वाला है",
        sla_breached: "समय सीमा पार",

        // Categories
        cat_water: "जल आपूर्ति एवं गुणवत्ता",
        cat_electricity: "विद्युत एवं ऊर्जा आपूर्ति",
        cat_roads: "सड़कें एवं अवसंरचना",
        cat_sanitation: "स्वच्छता एवं ठोस अपशिष्ट",
        cat_health: "स्वास्थ्य सेवा एवं अस्पताल",
        cat_revenue: "राजस्व एवं भूमि अभिलेख",
        cat_education: "शिक्षा एवं विद्यालय",
        cat_other: "सामान्य प्रशासन एवं अन्य",

        // Priority
        prio_low: "निम्न",
        prio_medium: "मध्यम",
        prio_high: "उच्च",
        prio_emergency: "आपातकालीन"
    },

    mr: {
        // Nav & Header
        portal_title: "गव्हटेक सीआरएम",
        portal_sub: "नागरी तक्रार निवारण व्यासपीठ",
        official_gov: "भारत सरकार | अधिकृत नागरी तक्रार निवारण कक्ष",
        national_helpline: "राष्ट्रीय हेल्पलाइन: 1800-11-4000 (टोल फ्री)",
        text_size: "फॉन्ट आकार:",
        high_contrast: "कॉन्ट्रास्ट",
        nav_home: "मुख्यपृष्ठ",
        nav_dashboard: "नागरीक पोर्टल",
        nav_admin: "प्रशासन डॅशबोर्ड",
        nav_track: "तक्रार ट्रॅक करा",
        nav_about: "माहिती",
        nav_contact: "हेल्पलाइन",
        nav_login: "लॉग इन",
        nav_register: "नोंदणी",
        nav_logout: "लॉग आउट",
        
        // Home Page
        namaskaram: "नमस्कार",
        hero_tagline: "पारदर्शक आणि वेळेवर तक्रार निवारणाने नागरिकांचे सक्षमीकरण",
        hero_desc: "नागरिकांना महापालिका, राज्य आणि केंद्र शासनाशी थेट जोडणारे आधुनिक डिजिटल व्यासपीठ. तक्रार नोंदवा, त्वरित स्थिती तपासा आणि जबाबदार प्रशासनाचा लाभ घ्या.",
        btn_login: "लॉग इन",
        btn_register: "नोंदणी",
        btn_about_modal: "गव्हटेक सीआरएम विषयी",
        btn_contact_modal: "हेल्पलाइन व संपर्क",
        track_quick_placeholder: "तक्रार आयडी प्रविष्ट करा (उदा. 1, 2, 102)...",
        track_quick_btn: "तक्रार ट्रॅक करा",
        quick_demo_label: "झटपट डेमो प्रवेश:",
        demo_citizen_btn: "डेमो नागरिक पोर्टल",
        demo_admin_btn: "डेमो प्रशासन डॅशबोर्ड",
        stat_total_registered: "एकूण नोंदवलेल्या तक्रारी",
        stat_redressed: "यशस्वी निवारण झालेल्या",
        stat_under_investigation: "प्रक्रियेत / तपासात",
        stat_sla_compliance: "एस.एल.ए. पूर्तता दर",
        process_badge: "पारदर्शक प्रक्रिया",
        process_heading: "गव्हटेक सीआरएम आपल्या तक्रारीचे कसे निवारण करते",
        process_sub: "वेळेत निवारण सुनिश्चित करणारा ४ टप्प्यांचा डिजिटल प्रवास.",
        step1_title: "१. तक्रार दाखल करा",
        step1_desc: "आपल्या भाषेत लिहा किंवा व्हॉइस इनपुट वापरा. फोटो, व्हिडिओ किंवा कागदपत्रे जोडा.",
        step2_title: "२. स्वयंचलित विभाग वाटप",
        step2_desc: "स्मार्ट प्रणालीद्वारे तक्रार संबंधित विभागाकडे वेळेच्या मर्यादेसह पाठवली जाते.",
        step3_title: "३. प्रत्यक्ष कारवाई",
        step3_desc: "विभागीय अधिकारी घटनास्थळाची पाहणी करतात, प्रगती नोंदवतात व पुरावे अपलोड करतात.",
        step4_title: "४. निवारण आणि अभिप्राय",
        step4_desc: "तक्रार निवारण झाल्यावर नागरिकास त्वरित संदेश मिळतो आणि ते अधिकाऱ्याचा शेरा पाहू शकतात.",
        dept_badge: "विभाग आणि कार्यक्षेत्र",
        dept_heading: "प्रमुख नागरी सेवा",
        dept_sub: "शहरी आणि ग्रामीण भागांसाठी त्वरित प्रशासकीय सेवा.",
        dept_water: "पाणी पुरवठा",
        dept_water_sub: "पाईपलाईन, गुणवत्ता व देयके",
        dept_elec: "वीज पुरवठा",
        dept_elec_sub: "खंडित वीज, मीटर व ट्रान्सफॉर्मर",
        dept_roads: "रस्ते व बांधकाम",
        dept_roads_sub: "खड्डे, पथदिवे व पूल",
        dept_sanitation: "स्वच्छता व कचरा",
        dept_sanitation_sub: "कचरा उचल व सांडपाणी",

        // Login Page
        login_title: "पोर्टल लॉग इन",
        login_sub: "सुरक्षित नागरी व प्रशासकीय प्रवेश",
        role_label: "भूमिका निवडा",
        role_citizen_opt: "नागरिक / सामान्य वापरकर्ता",
        role_admin_opt: "प्रशासक / तक्रार निवारण अधिकारी",
        login_id_label: "लॉग इन आयडी / वापरकर्ता नाव",
        login_id_placeholder: "वापरकर्ता नाव किंवा आयडी टाका",
        password_label: "पासवर्ड",
        password_placeholder: "पासवर्ड टाका",
        forgot_password_link: "पासवर्ड विसरलात?",
        remember_me_label: "मला या उपकरणावर साइन इन ठेवा",
        login_btn: "गव्हटेकमध्ये प्रवेश करा",
        quick_demo_login_label: "१-क्लिक झटपट डेमो लॉग इन:",
        no_account_text: "खाते नाही का?",
        sign_up_link: "येथे नोंदणी करा",
        forgot_modal_title: "प्रमाणपत्र रीसेट करा",
        forgot_modal_desc: "नोंदणीकृत मोबाइल किंवा ईमेल टाका. पडताळणीसाठी ओटीपी पाठवला जाईल.",
        forgot_input_label: "नोंदणीकृत मोबाइल किंवा ईमेल",
        forgot_admin_notice: "प्रशासकीय खात्यांसाठी जिल्हा नोडल अधिकाऱ्यांशी संपर्क साधा.",
        forgot_cancel_btn: "रद्द करा",
        forgot_submit_btn: "ओटीपी पाठवा",

        // Registration Page
        register_title: "नागरिक व अधिकारी नोंदणी",
        register_sub: "पारदर्शक तक्रार निवारणासाठी आपले प्रोफाइल तयार करा",
        reg_role_label: "नोंदणी प्रकार",
        reg_role_hint: "तक्रारीसाठी 'नागरिक', निवारणासाठी 'अधिकारी' निवडा.",
        reg_username_label: "लॉग इन आयडी / वापरकर्ता नाव",
        reg_fullname_label: "पूर्ण नाव",
        reg_fullname_placeholder: "आपले पूर्ण नाव प्रविष्ट करा",
        reg_email_label: "ईमेल पत्ता",
        reg_email_placeholder: "name@example.com",
        reg_mobile_label: "मोबाइल क्रमांक (१० अंक)",
        reg_mobile_placeholder: "१० अंकी मोबाइल क्रमांक",
        reg_district_label: "जिल्हा / शहर",
        reg_district_placeholder: "जिल्हा किंवा शहर",
        reg_address_label: "निवासी / कार्यालयीन पत्ता",
        reg_address_placeholder: "संपूर्ण पत्ता प्रविष्ट करा",
        reg_password1_label: "पासवर्ड",
        reg_password1_hint: "किमान ८ अक्षरे आवश्यक.",
        reg_password2_label: "पासवर्डची पुष्टी करा",
        reg_terms_label: "मी प्रमाणित करतो/करते की दिलेली माहिती खरी आहे व मी नियमांचे पालन करेन.",
        reg_submit_btn: "खाते तयार करा",
        already_account_text: "आधीच खाते आहे का?",
        login_here_link: "येथे लॉग इन करा",

        // Citizen Dashboard
        citizen_welcome: "नमस्कार,",
        verified_citizen_badge: "सत्यापित नागरिक",
        citizen_id_label: "नागरिक आयडी:",
        btn_file_grievance: "नवीन तक्रार नोंदवा",
        kpi_total_submitted: "एकूण दाखल",
        kpi_pending_triage: "पडताळणी प्रलंबित",
        kpi_in_progress: "प्रगतीपथावर",
        kpi_resolved: "निवारण झाले",
        history_title: "माझ्या तक्रारींचा इतिहास",
        search_grievances_placeholder: "आयडी, कीवर्ड किंवा विभागाने शोधा...",
        th_id_title: "आयडी व शीर्षक",
        th_category: "वर्ग / विभाग",
        th_status: "स्थिती",
        th_sla_target: "एस.एल.ए मर्यादा",
        th_action: "कृती",
        btn_track: "तपासा",
        no_grievances_title: "अद्याप कोणतीही तक्रार नोंदवलेली नाही",
        no_grievances_desc: "आपल्या भागात काही समस्या आहे का? शासकीय मुदतीत निराकरणासाठी तक्रार दाखल करा.",
        btn_file_first: "पहिली तक्रार दाखल करा",
        updates_title: "अद्यतने व सूचना",
        unread_badge: "नवीन",
        mark_as_read: "वाचले म्हणून खूण करा",
        no_updates_desc: "कोणतीही नवीन सूचना नाही. तक्रारींचे अपडेट येथे त्वरित दिसतील.",
        support_title: "तक्रार सहाय्य हवे आहे?",
        support_desc: "आपण २४x७ टोल-फ्री हेल्पलाइनवर संपर्क साधू शकता.",
        view_nodal_btn: "जिल्हा नोडल केंद्रे पहा",

        // Form Modal
        modal_file_title: "नवीन तक्रार दाखल करा",
        modal_file_desc: "कृपया अचूक माहिती द्या. आपण व्हॉइस इनपुट वापरून मराठी किंवा इंग्रजीत बोलू शकता.",
        field_title_label: "तक्रारीचे शीर्षक",
        field_name_label: "नागरिकाचे नाव",
        field_lang_label: "सादरीकरण भाषा",
        field_category_label: "विभाग / श्रेणी",
        field_priority_label: "प्राधान्य / तातडी",
        field_location_label: "घटनेचे ठिकाण / वॉर्ड / पिनकोड",
        field_desc_label: "तपशीलवार तक्रार",
        field_evidence_label: "पुरावा जोडा (फोटो / व्हिडिओ / दस्तऐवज)",
        evidence_hint: "प्रारूप: JPG, PNG, MP4, WebM, PDF. कमाल आकार: 25MB.",
        btn_voice_input: "व्हॉइस इनपुट",
        btn_voice_listening: "ऐकत आहे... बोला",
        voice_hint: "माइकवर क्लिक करा आणि थेट मराठी, हिंदी किंवा इंग्रजीत बोला.",
        btn_cancel: "रद्द करा",
        btn_submit_grievance: "तक्रार दाखल करा",

        // Admin Dashboard
        admin_console_title: "तक्रार निवारण प्रशासन",
        admin_badge: "अधिकारी स्तर प्रवेश",
        admin_sub: "केंद्रीय नियंत्रण प्रणाली | एस.एल.ए. पूर्तता व विभागीय कारवाई फलक",
        btn_export_csv: "एक्सेल / सीएसव्ही निर्यात",
        btn_print_pdf: "प्रिंट / पीडीएफ अहवाल",
        kpi_total_inflow: "एकूण तक्रारी",
        kpi_pending_action: "प्रलंबित कारवाई",
        kpi_under_investigation: "प्रगतीपथावर",
        kpi_resolved_cases: "निवारण झालेले",
        kpi_sla_breaches: "मुदत उल्लंघन",
        kpi_sla_score: "एस.एल.ए. स्कोअर",
        filter_search_placeholder: "आयडी, नागरिक, शीर्षकाने शोधा...",
        opt_all_categories: "सर्व वर्ग",
        opt_all_statuses: "सर्व स्थिती",
        opt_all_sla: "सर्व एस.एल.ए स्थिती",
        filter_location_placeholder: "स्थान/जिल्ह्याद्वारे शोधा",
        opt_sla_ontrack: "मुदतीमध्ये",
        opt_sla_approaching: "मुदत संपत आली",
        opt_sla_breached: "मुदत संपली (तातडीचे)",
        btn_apply_filter: "शोधा",
        records_title: "तक्रार निवारण नोंदी",
        th_officer_action: "पाहणी व कारवाई",
        btn_review_action: "पाहणी व कारवाई",
        chart_category_title: "वर्गानुसार तक्रारी",
        chart_status_title: "स्थिती वितरण",
        chart_priority_title: "प्राधान्यानुसार प्रवाह",
        modal_review_title: "तक्रारीची पाहणी",
        lbl_citizen_name: "नागरिकाचे नाव:",
        lbl_location_ward: "ठिकाण / वॉर्ड:",
        lbl_dept: "विभाग:",
        lbl_lodged_on: "दाखल तारीख:",
        lbl_original_text: "मूळ तक्रार मजकूर:",
        lbl_translated_text: "इंग्रजी अनुवाद:",
        lbl_evidence: "जोडलेले पुरावे:",
        lbl_no_media: "कोणताही पुरावा जोडलेला नाही.",
        lbl_update_status: "निवारण स्थिती बदला:",
        lbl_reassign_dept: "विभाग पुनर्वाटप:",
        lbl_admin_remarks: "अधिकृत शेरा / निवारण तपशील:",
        admin_remarks_placeholder: "कारवाईचा तपशील किंवा निवारण अहवाल लिहा (नागरिकाला सूचित केले जाईल)",
        btn_save_notify: "जतन करा व नागरिकाला कळवा",

        // Track Page
        track_page_title: "तक्रार निवारण स्थिती तपासा",
        track_card_label: "आयडीने दुसरी तक्रार शोधा:",
        track_input_placeholder: "तक्रार संदर्भ आयडी प्रविष्ट करा (उदा. 1, 2, 102)",
        btn_track_now: "आता तपासा",
        timeline_heading: "तक्रार निवारण जीवनचक्र व प्रगती ट्रॅकर",
        stage_lodged: "दाखल झाली",
        stage_assigned: "विभाग वाटप",
        stage_inprogress: "प्रगतीपथावर",
        stage_action: "कारवाई झाली",
        stage_resolved: "निवारण झाले",
        sla_box_resolved: "शासकीय नियमांनुसार तक्रारीचे यशस्वी निवारण झाले आहे",
        sla_box_breached: "मुदत संपली — थेट जिल्हाधिकाऱ्यांकडे वर्ग करण्यात आली",
        sla_box_approaching: "मुदत संपत आली — उच्च प्राधान्याने कारवाई सुरू",
        sla_box_ontrack: "मुदतीत सक्रिय: अपेक्षित पूर्णतेसाठी उरलेले दिवस",
        target_date_label: "अपेक्षित पूर्णता तारीख:",
        th_citizen_name: "नागरिकाचे नाव",
        th_assigned_dept: "नेमलेला विभाग",
        th_location: "ठिकाण / वॉर्ड",
        th_language: "तक्रार भाषा",
        th_citizen_desc: "तक्रार वर्णन",
        th_translated_desc: "इंग्रजी अनुवाद",
        th_admin_remarks: "अधिकृत निवारण शेरा",
        btn_return_dashboard: "डॅशबोर्डवर परत जा",
        btn_confirm_resolved: "पुष्टी करा व निवारित नोंदवा",
        track_empty_title: "आपली तक्रार स्थिती तपासा",
        track_empty_desc: "प्रगती आणि अधिकृत शेरा पाहण्यासाठी वरील शोध पेटीत वैध तक्रार आयडी टाका.",

        // Status & SLA
        status_pending: "प्रलंबित",
        status_in_progress: "प्रगतीपथावर",
        status_resolved: "निवारण झाले",
        sla_on_track: "वेळेत",
        sla_approaching: "मुदत संपत आली",
        sla_breached: "मुदत संपली",

        // Categories
        cat_water: "पाणी पुरवठा व गुणवत्ता",
        cat_electricity: "वीज पुरवठा व ऊर्जा",
        cat_roads: "रस्ते व पायाभूत सुविधा",
        cat_sanitation: "स्वच्छता व घनकचरा",
        cat_health: "आरोग्य सेवा व रुग्णालये",
        cat_revenue: "महसूल व जमीन अभिलेख",
        cat_education: "शिक्षण व शाळा",
        cat_other: "सामान्य प्रशासन व इतर",

        // Priority
        prio_low: "कमी",
        prio_medium: "मध्यम",
        prio_high: "उच्च",
        prio_emergency: "तातडीचे"
    },

    sa: {
        // Nav & Header
        portal_title: "शासन-प्रविधि प्रबंधनम्",
        portal_sub: "नागरिक कष्ट-निवारणम्",
        official_gov: "भारत-सर्वकारः | अधिकृत-नागरिक-कष्ट-निवारण-विभागः",
        national_helpline: "राष्ट्र-सहायता-क्रमाङ्कः 1800-11-4000 (निःशुल्कम्)",
        text_size: "अक्षर-मानम्:",
        high_contrast: "उच्च-वैषम्यम्",
        nav_home: "गृहम्",
        nav_dashboard: "नागरिक-फलकम्",
        nav_admin: "प्रशासक-फलकम्",
        nav_track: "अन्वेषणम्",
        nav_about: "विषये",
        nav_contact: "सहायता",
        nav_login: "प्रवेशः",
        nav_register: "पंजीकरणम्",
        nav_logout: "निर्गमः",
        
        // Home Page
        namaskaram: "नमस्कारम्",
        hero_tagline: "पारदर्शिना समयबद्धेन कष्ट-निवारणेन सर्वनागरिकाणां सबलीकरणम्",
        hero_desc: "नागरिकान् साक्षात् शासनाधिकारिभिः सह योजयन् एकात्मिका डिजिटल-व्यवस्था। कष्टं निवेदयन्तु, स्थितिं पश्यन्तु, पारदर्शि-प्रशासनं प्राप्नुवन्तु च।",
        btn_login: "प्रवेशः",
        btn_register: "पंजीकरणम्",
        btn_about_modal: "व्यवस्था-विषये",
        btn_contact_modal: "सहायता-सम्पर्कः",
        track_quick_placeholder: "निवेदन-क्रमाङ्कं लिखन्तु (उदा. 1, 2, 102)...",
        track_quick_btn: "स्थितिं पश्यतु",
        quick_demo_label: "प्रदर्शन-प्रवेशः:",
        demo_citizen_btn: "प्रदर्शन-नागरिकः",
        demo_admin_btn: "प्रदर्शन-प्रशासकः",
        stat_total_registered: "समग्र-पंजीकृत-निवेदनानि",
        stat_redressed: "सफलतापूर्वकं निवारितानि",
        stat_under_investigation: "अन्वेषण-प्रक्रियायाम्",
        stat_sla_compliance: "गुणवत्ता-समय-दरः",
        process_badge: "पारदर्शि-प्रक्रिया",
        process_heading: "कथम् इयं व्यवस्था कष्टं निवारयति",
        process_sub: "समयबद्ध-निवारणाय चतुश्चरणात्मिका डिजिटल-प्रक्रिया।",
        step1_title: "१. निवेदनं प्रेषयतु",
        step1_desc: "स्वभाषया लिखन्तु वाणी-निवेशं वा कुर्वन्तु। चित्राणि प्रलेखान् च योजयन्तु।",
        step2_title: "२. विभाग-विनियोगः",
        step2_desc: "कुशल-प्रणाली संबंधित-विभागाय समय-मर्यादया सह कार्यं समर्पयति।",
        step3_title: "३. स्थलीय-कार्रवाई",
        step3_desc: "अधिकाऱिणः स्थल-निरीक्षणं कृत्वा समाधान-प्रमाणानि योजयन्ति।",
        step4_title: "४. निवारणं पुष्टिः च",
        step4_desc: "नागरिकाय त्वरित-सूचना प्राप्यते ते च समाधानं द्रष्टुं शक्नुवन्ति।",
        dept_badge: "विभागाः",
        dept_heading: "प्रमुखाः लोकसेवाः",
        dept_sub: "नगरीय-ग्रामीण-प्रशासनेभ्यः त्वरित-सेवा।",
        dept_water: "जलापूर्तिः",
        dept_water_sub: "वाहिनी, शुद्धता शुल्कानि च",
        dept_elec: "विद्युत्-ऊर्जा",
        dept_elec_sub: "विद्युत्-अवरोधः यन्त्राणि च",
        dept_roads: "मार्गाः निर्माणं च",
        dept_roads_sub: "गर्त-निवारणम् दीपानि च",
        dept_sanitation: "स्वच्छता अपशिष्टं च",
        dept_sanitation_sub: "कचरा-निष्कासनम् जल-निकासः च",

        // Login Page
        login_title: "प्रवेश-फलकम्",
        login_sub: "सुरक्षित-नागरिक-प्रशासक-प्रवेशः",
        role_label: "भूमिका-चयनम्",
        role_citizen_opt: "नागरिकः / सामान्य-प्रयोक्ता",
        role_admin_opt: "प्रशासकः / निवारण-अधिकारी",
        login_id_label: "प्रवेश-परिचयः / नाम",
        login_id_placeholder: "प्रयोक्तृ-नाम लिखन्तु",
        password_label: "कूटशब्दः (Password)",
        password_placeholder: "कूटशब्दं प्रविशतु",
        forgot_password_link: "कूटशब्दं विस्मृतम्?",
        remember_me_label: "मम प्रवेशं स्मरतु",
        login_btn: "प्रविशतु",
        quick_demo_login_label: "त्वरित-प्रदर्शन-प्रवेशः:",
        no_account_text: "खाता नास्ति वा?",
        sign_up_link: "पंजीकरणं कुर्वन्तु",
        forgot_modal_title: "कूटशब्द-पुनःस्थापनम्",
        forgot_modal_desc: "पंजीकृत-दूरवाणीं लिखन्तु। सत्यापन-ओटीपी आगमिष्यति।",
        forgot_input_label: "पंजीकृत-दूरवाणी वा ईमेल",
        forgot_admin_notice: "प्रशासकीय-सहायतायै नोडल-अधिकारिणं पश्यन्तु।",
        forgot_cancel_btn: "रद्दम्",
        forgot_submit_btn: "ओटीपी प्रेषयतु",

        // Registration Page
        register_title: "नागरिक-अधिकारी-पंजीकरणम्",
        register_sub: "पारदर्शि-प्रशासनाय स्वविवरणं रचयन्तु",
        reg_role_label: "पंजीकरण-प्रकारः",
        reg_role_hint: "निवेदनाय 'नागरिकः', निवारणाय 'अधिकारी' इति चिनोतु।",
        reg_username_label: "इच्छित-प्रयोक्तृ-नाम",
        reg_fullname_label: "पूर्ण-नाम",
        reg_fullname_placeholder: "वैधानिकं पूर्ण-नाम लिखन्तु",
        reg_email_label: "ईमेल-पत्रम्",
        reg_email_placeholder: "name@example.com",
        reg_mobile_label: "दूरभाष-क्रमाङ्कः (१० अङ्काः)",
        reg_mobile_placeholder: "१० अङ्कीय-दूरभाषः",
        reg_district_label: "मण्डलम् / नगरम्",
        reg_district_placeholder: "मण्डलं वा नगरम्",
        reg_address_label: "निवास-स्थानम् / कार्यालयाभिधानम्",
        reg_address_placeholder: "पूर्ण-स्थान-विवरणम्",
        reg_password1_label: "कूटशब्दः",
        reg_password1_hint: "न्यूनतमं ८ अक्षराणि आवश्यकाः।",
        reg_password2_label: "कूटशब्द-पुष्टिः",
        reg_terms_label: "अहं प्रमाणयामि यत् दत्तं विवरणं सत्यम् अस्ति नियमानां पालनं करिष्यामि च।",
        reg_submit_btn: "पंजीकरणं समापयतु",
        already_account_text: "पूर्वमेव खाता अस्ति किम्?",
        login_here_link: "प्रवेशं कुर्वन्तु",

        // Citizen Dashboard
        citizen_welcome: "नमस्ते,",
        verified_citizen_badge: "सत्यापित-नागरिकः",
        citizen_id_label: "नागरिक-क्रमाङ्कः:",
        btn_file_grievance: "नूतनं कष्टं निवेदयतु",
        kpi_total_submitted: "समग्र-प्रेषितानि",
        kpi_pending_triage: "परीक्षण-प्रतीक्षितम्",
        kpi_in_progress: "प्रचलति",
        kpi_resolved: "निवारितम्",
        history_title: "मम कष्ट-निवेदनानाम् इतिहासः",
        search_grievances_placeholder: "क्रमाङ्केन शब्देन वा अन्विष्यतु...",
        th_id_title: "क्रमाङ्कः शीर्षकं च",
        th_category: "विभागः",
        th_status: "स्थितिः",
        th_sla_target: "गुणवत्ता-अवधिः",
        th_action: "कार्रवाई",
        btn_track: "पश्यतु",
        no_grievances_title: "किञ्चिदपि निवेदनं न कृतम्",
        no_grievances_desc: "भवतः परिसरे कापि समस्या अस्ति किम्? शीघ्र-निवारणाय अत्र निवेदयतु।",
        btn_file_first: "प्रथमं निवेदनं प्रेषयतु",
        updates_title: "अद्यतन-सूचनाः",
        unread_badge: "नवीना",
        mark_as_read: "पठितम् इति अङ्कयतु",
        no_updates_desc: "कापि नवीना सूचना नास्ति। भवतः निवेदनेषु प्रगतिः अत्र दृश्यते।",
        support_title: "सहायता आवश्यकी किम्?",
        support_desc: "भवन्तः २४x७ निःशुल्क-क्रमाङ्के वार्तां कर्तुं शक्नुवन्ति।",
        view_nodal_btn: "नोडल-केन्द्राणि पश्यतु",

        // Form Modal
        modal_file_title: "नूतनं कष्टं निवेदयतु",
        modal_file_desc: "कृपया यथार्थं विवरणं ददातु। वाणी-निवेशेन अपि वक्तुं शक्नुवन्ति।",
        field_title_label: "निवेदन-शीर्षकम्",
        field_name_label: "नागरिक-नाम",
        field_lang_label: "निवेदन-भाषा",
        field_category_label: "विभागः / श्रेणी",
        field_priority_label: "प्राथमिकता / शीघ्रता",
        field_location_label: "घटना-स्थानम् / मण्डलम्",
        field_desc_label: "विस्तृत-विवरणम्",
        field_evidence_label: "साक्ष्यं योजयतु (चित्राणि / प्रलेखाः)",
        evidence_hint: "प्रारूपाणि: JPG, PNG, MP4, WebM, PDF. अधिकतमम्: 25MB.",
        btn_voice_input: "वाणी-निवेशः",
        btn_voice_listening: "श्रूयते... वदतु",
        voice_hint: "माइक-चिह्ने स्पृष्ट्वा साक्षात् वदन्तु।",
        btn_cancel: "रद्दम्",
        btn_submit_grievance: "निवेदनं प्रेषयतु",

        // Admin Dashboard
        admin_console_title: "कष्ट-निवारण-प्रशासनम्",
        admin_badge: "अधिकारि-प्रवेशः",
        admin_sub: "केन्द्रीय-निगरानी-व्यवस्था | गुणवत्ता-पालनादेश-फलकम्",
        btn_export_csv: "एक्सेल/सीएसवी निष्कासनम्",
        btn_print_pdf: "मुद्रणम् / पीडीएफ-विवरणम्",
        kpi_total_inflow: "समग्र-निवेदनानि",
        kpi_pending_action: "प्रतीक्षित-कार्रवाई",
        kpi_under_investigation: "प्रचलति",
        kpi_resolved_cases: "निवारितानि",
        kpi_sla_breaches: "समय-अतिक्रमणम्",
        kpi_sla_score: "गुणवत्ता-दरः",
        filter_search_placeholder: "क्रमाङ्केन नाम्ना वा अन्वेषणम्...",
        opt_all_categories: "सर्वे विभागाः",
        opt_all_statuses: "सर्वाः स्थितयः",
        opt_all_sla: "सर्वे गुणवत्ता-स्थितयः",
        filter_location_placeholder: "स्थानेन अन्विष्यतु",
        opt_sla_ontrack: "समय-मर्यादायाम्",
        opt_sla_approaching: "समय-समाप्तिः निकटे",
        opt_sla_breached: "समय-अतिक्रान्तम्",
        btn_apply_filter: "अन्विष्यतु",
        records_title: "निवारण-अभिलेख-पञ्जिका",
        th_officer_action: "पुनरीक्षणं कार्रवाई च",
        btn_review_action: "पुनरीक्षणं कुर्वन्तु",
        chart_category_title: "विभागानुसारं निवेदनानि",
        chart_status_title: "स्थिति-वितरणम्",
        chart_priority_title: "प्राथमिकतानुसार-प्रवाहः",
        modal_review_title: "निवेदन-पुनरीक्षणम्",
        lbl_citizen_name: "नागरिक-नाम:",
        lbl_location_ward: "स्थानम् / मण्डलम्:",
        lbl_dept: "विभागः:",
        lbl_lodged_on: "पंजीकरण-दिनाङ्कः:",
        lbl_original_text: "मूल-निवेदन-पाठः:",
        lbl_translated_text: "आंग्ल-अनुवादः:",
        lbl_evidence: "संलग्न-साक्ष्यम्:",
        lbl_no_media: "किमपि साक्ष्यं न योजितम्।",
        lbl_update_status: "स्थिति-परिवर्तनम्:",
        lbl_reassign_dept: "विभाग-पुनर्विभाजनम्:",
        lbl_admin_remarks: "अधिकृत-टिप्पणी / समाधान-विवरणम्:",
        admin_remarks_placeholder: "समाधान-विवरणं लिखन्तु (नागरिकाय सूचयिष्यते)",
        btn_save_notify: "संरक्षतु सूचयतु च",

        // Track Page
        track_page_title: "निवेदन-प्रगतिं पश्यतु",
        track_card_label: "क्रमाङ्केन अन्यं निवेदनं पश्यतु:",
        track_input_placeholder: "निवेदन-क्रमाङ्कं लिखन्तु (उदा. 1, 2, 102)",
        btn_track_now: "अधुना पश्यतु",
        timeline_heading: "निवेदन-जीवनचक्रं प्रगति-सूचकम् च",
        stage_lodged: "पंजीकृतम्",
        stage_assigned: "विभाग-समर्पितम्",
        stage_inprogress: "प्रचलति",
        stage_action: "कार्रवाई जाता",
        stage_resolved: "समाहितम्",
        sla_box_resolved: "शासकीय-नियमानुसारं निवेदनं सफलतापूर्वकं समाहितम्",
        sla_box_breached: "समय-अतिक्रान्तम् — साक्षात् मण्डलाधिकारिणे प्रेषितम्",
        sla_box_approaching: "समय-समाप्तिः निकटे — त्वरित-कार्रवाई प्रचलति",
        sla_box_ontrack: "सक्रियम्: अपेक्षित-समाधानाय अवशिष्टाः दिवसाः",
        target_date_label: "अपेक्षित-पूर्णता-दिनाङ्कः:",
        th_citizen_name: "नागरिक-नाम",
        th_assigned_dept: "समर्पित-प्राधिकरणम्",
        th_location: "स्थानम्",
        th_language: "निवेदन-भाषा",
        th_citizen_desc: "नागरिक-विवरणम्",
        th_translated_desc: "आंग्ल-अनुवादः",
        th_admin_remarks: "अधिकृत-समाधान-टिप्पणी",
        btn_return_dashboard: "फलकं प्रतिगच्छतु",
        btn_confirm_resolved: "पुष्टिं कुर्वन्तु निवारितम् अङ्कयतु च",
        track_empty_title: "स्वकीय-निवेदन-स्थितिं पश्यतु",
        track_empty_desc: "प्रगतिं द्रष्टुं उपरि अन्वेषण-पेटिकायां वैधं क्रमाङ्कं प्रविशतु।",

        // Status & SLA
        status_pending: "प्रतीक्षितम्",
        status_in_progress: "प्रचलति",
        status_resolved: "समाहितम्",
        sla_on_track: "समयबद्धम्",
        sla_approaching: "निकट-समयः",
        sla_breached: "अतिक्रान्तः",

        // Categories
        cat_water: "जलापूर्तिः गुणवत्ता च",
        cat_electricity: "विद्युत् ऊर्जा च",
        cat_roads: "मार्गाः संरचना च",
        cat_sanitation: "स्वच्छता अपशिष्टं च",
        cat_health: "स्वास्थ्य-चिकित्सालयः",
        cat_revenue: "राजस्वं भूमि-अभिलेखः",
        cat_education: "शिक्षा विद्यालयाः च",
        cat_other: "सामान्य-प्रशासनम्",

        // Priority
        prio_low: "न्यूनम्",
        prio_medium: "मध्यमम्",
        prio_high: "उच्चम्",
        prio_emergency: "अत्यावश्यकम्"
    },

    ta: {
        // Nav & Header
        portal_title: "அரசுதொழில்நுட்ப குறைதீர்ப்பு",
        portal_sub: "குடிமக்கள் குறைதீர்ப்பு தளம்",
        official_gov: "இந்திய அரசு | அதிகாரப்பூர்வ குறைதீர்ப்பு பிரிவு",
        national_helpline: "தேசிய உதவி எண்: 1800-11-4000 (கட்டணமில்லா)",
        text_size: "எழுத்து அளவு:",
        high_contrast: "உயர் மாறுபாடு",
        nav_home: "முகப்பு",
        nav_dashboard: "குடிமக்கள் தளம்",
        nav_admin: "நிர்வாக தளம்",
        nav_track: "கண்காணிக்க",
        nav_about: "பற்றி",
        nav_contact: "உதவி எண்",
        nav_login: "உள்நுழைக",
        nav_register: "பதிவு செய்க",
        nav_logout: "வெளியேறு",
        
        // Home Page
        namaskaram: "வணக்கம்",
        hero_tagline: "வெளிப்படையான மற்றும் காலவரையறைக்குட்பட்ட தீர்வுகள்",
        hero_desc: "குடிமக்களையும் அரசு அதிகாரிகளையும் நேரடியாக இணைக்கும் டிஜிட்டல் தளம். புகார் பதிவு செய்க, நிலையை உடனுக்குடன் கண்காணிக்கவும்.",
        btn_login: "உள்நுழைக",
        btn_register: "பதிவு செய்க",
        btn_about_modal: "எங்களைப் பற்றி",
        btn_contact_modal: "உதவி எண் மற்றும் தொடர்பு",
        track_quick_placeholder: "புகார் எண் உள்ளிடவும் (எ.கா. 1, 2, 102)...",
        track_quick_btn: "நிலையை காண்க",
        quick_demo_label: "மாதிரி அணுகல்:",
        demo_citizen_btn: "மாதிரி குடிமகன்",
        demo_admin_btn: "மாதிரி அதிகாரி",
        stat_total_registered: "மொத்த புகார்கள்",
        stat_redressed: "தீர்க்கப்பட்டவை",
        stat_under_investigation: "நடவடிக்கையில்",
        stat_sla_compliance: "தீர்வு விகிதம்",
        process_badge: "வெளிப்படையான செயல்முறை",
        process_heading: "புகார் தீர்க்கப்படும் வழிமுறை",
        process_sub: "காலவரையறைக்குட்பட்ட தீர்வுக்கான 4 எளிய படிகள்.",
        step1_title: "1. புகார் சமர்ப்பிக்கவும்",
        step1_desc: "உங்கள் மொழியில் விவரிக்கவும் அல்லது குரல் உள்ளீட்டைப் பயன்படுத்தவும். புகைப்படங்களை இணைக்கவும்.",
        step2_title: "2. தானியங்கி துறை ஒதுக்கீடு",
        step2_desc: "சம்பந்தப்பட்ட துறைக்கு காலக்கெடுவுடன் தானாக அனுப்பப்படும்.",
        step3_title: "3. கள நடவடிக்கை",
        step3_desc: "அதிகாரிகள் ஆய்வு செய்து நடவடிக்கைகளை பதிவு செய்கிறார்கள்.",
        step4_title: "4. தீர்வு மற்றும் உறுதிப்படுத்தல்",
        step4_desc: "தீர்வு காணப்பட்டதும் குடிமகனுக்கு உடனடியாக குறுஞ்செய்தி அனுப்பப்படும்.",
        dept_badge: "துறைகள்",
        dept_heading: "முக்கிய பொது சேவைகள்",
        dept_sub: "அனைத்து அரசுத் துறைகளுக்கும் உடனடி தீர்வு.",
        dept_water: "குடிநீர் விநியோகம்",
        dept_water_sub: "குழாய் மற்றும் தரம்",
        dept_elec: "மின்சாரம் மற்றும் ஆற்றல்",
        dept_elec_sub: "மின்வெட்டு மற்றும் மீட்டர்கள்",
        dept_roads: "சாலைகள் மற்றும் நெடுஞ்சாலைகள்",
        dept_roads_sub: "பழுது மற்றும் விளக்குகள்",
        dept_sanitation: "துப்புரவு மற்றும் கழிவு",
        dept_sanitation_sub: "குப்பை அகற்றுதல்",

        // Login Page
        login_title: "உள்நுழைவு",
        login_sub: "குடிமக்கள் மற்றும் நிர்வாகிகளுக்கான பாதுகாப்பான தளம்",
        role_label: "பங்கைத் தேர்ந்தெடுக்கவும்",
        role_citizen_opt: "குடிமகன் / பயனர்",
        role_admin_opt: "நிர்வாகி / குறைதீர்ப்பு அதிகாரி",
        login_id_label: "பயனர் ஐடி",
        login_id_placeholder: "பயனர் பெயரை உள்ளிடவும்",
        password_label: "கடவுச்சொல்",
        password_placeholder: "கடவுச்சொல்லை உள்ளிடவும்",
        forgot_password_link: "கடவுச்சொல் மறந்துவிட்டதா?",
        remember_me_label: "என்னை நினைவில் கொள்க",
        login_btn: "உள்நுழைக",
        quick_demo_login_label: "1-கிளிக் மாதிரி உள்நுழைவு:",
        no_account_text: "கணக்கு இல்லையா?",
        sign_up_link: "இங்கே பதிவு செய்க",
        forgot_modal_title: "கடவுச்சொல் மீட்டமைக்க",
        forgot_modal_desc: "பதிவுசெய்த மொபைல் அல்லது மின்னஞ்சலை உள்ளிடவும். ஓடிபி அனுப்பப்படும்.",
        forgot_input_label: "மொபைல் எண் அல்லது மின்னஞ்சல்",
        forgot_admin_notice: "நிர்வாக உதவிகளுக்கு மாவட்ட அதிகாரியை தொடர்பு கொள்ளவும்.",
        forgot_cancel_btn: "ரத்து செய்",
        forgot_submit_btn: "ஓடிபி அனுப்புக",

        // Registration Page
        register_title: "குடிமக்கள் மற்றும் அதிகாரி பதிவு",
        register_sub: "குறைதீர்ப்புக்கான உங்கள் சுயவிவரத்தை உருவாக்கவும்",
        reg_role_label: "பதிவு செய்யும் பங்கு",
        reg_role_hint: "புகாருக்கு 'குடிமகன்', தீர்வுக்கு 'அதிகாரி' என்பதைத் தேர்ந்தெடுக்கவும்.",
        reg_username_label: "விரும்பிய பயனர் பெயர்",
        reg_fullname_label: "முழு பெயர்",
        reg_fullname_placeholder: "முழு பெயரை உள்ளிடவும்",
        reg_email_label: "மின்னஞ்சல் முகவரி",
        reg_email_placeholder: "name@example.com",
        reg_mobile_label: "மொபைல் எண் (10 இலக்கங்கள்)",
        reg_mobile_placeholder: "10 இலக்க மொபைல் எண்",
        reg_district_label: "மாவட்டம் / நகரம்",
        reg_district_placeholder: "மாவட்டம் அல்லது நகரம்",
        reg_address_label: "முகவரி",
        reg_address_placeholder: "முழு முகவரியை உள்ளிடவும்",
        reg_password1_label: "கடவுச்சொல்",
        reg_password1_hint: "குறைந்தது 8 எழுத்துக்கள்.",
        reg_password2_label: "கடவுச்சொல்லை உறுதிப்படுத்தவும்",
        reg_terms_label: "வழங்கப்பட்ட தகவல்கள் உண்மை என்று உறுதிப்படுத்துகிறேன்.",
        reg_submit_btn: "பதிவு செய்க",
        already_account_text: "ஏற்கனவே கணக்கு உள்ளதா?",
        login_here_link: "இங்கே உள்நுழையவும்",

        // Citizen Dashboard
        citizen_welcome: "வணக்கம்,",
        verified_citizen_badge: "சரிபார்க்கப்பட்ட குடிமகன்",
        citizen_id_label: "குடிமகன் ஐடி:",
        btn_file_grievance: "புதிய புகார் பதிவு செய்க",
        kpi_total_submitted: "மொத்த புகார்கள்",
        kpi_pending_triage: "பரிசீலனையில்",
        kpi_in_progress: "நடவடிக்கையில்",
        kpi_resolved: "தீர்க்கப்பட்டது",
        history_title: "புகார் வரலாறு",
        search_grievances_placeholder: "தேட...",
        th_id_title: "எண் மற்றும் தலைப்பு",
        th_category: "துறை",
        th_status: "நிலை",
        th_sla_target: "காலக்கெடு",
        th_action: "நடவடிக்கை",
        btn_track: "காண்க",
        no_grievances_title: "புகார்கள் எதுவும் பதிவு செய்யப்படவில்லை",
        no_grievances_desc: "உங்கள் பகுதியில் ஏதேனும் பிரச்சனை உள்ளதா? உடனடியாக பதிவு செய்யுங்கள்.",
        btn_file_first: "முதல் புகாரை பதிவு செய்க",
        updates_title: "அறிவிப்புகள்",
        unread_badge: "புதியது",
        mark_as_read: "படித்ததாக குறிக்கவும்",
        no_updates_desc: "அறிவிப்புகள் எதுவும் இல்லை.",
        support_title: "உதவி தேவையா?",
        support_desc: "24x7 இலவச உதவி எண்ணை அழைக்கலாம்.",
        view_nodal_btn: "மையங்களை காண்க",

        // Form Modal
        modal_file_title: "புதிய புகார் பதிவு செய்க",
        modal_file_desc: "துல்லியமான விவரங்களை வழங்கவும். நீங்கள் குரல் உள்ளீட்டைப் பயன்படுத்தலாம்.",
        field_title_label: "புகார் தலைப்பு",
        field_name_label: "குடிமகன் பெயர்",
        field_lang_label: "சமர்ப்பிக்கும் மொழி",
        field_category_label: "துறை / வகை",
        field_priority_label: "முன்னுரிமை",
        field_location_label: "இடம் / மாவட்டம்",
        field_desc_label: "விளக்கம்",
        field_evidence_label: "ஆதாரங்களை இணைக்கவும்",
        evidence_hint: "வடிவங்கள்: JPG, PNG, MP4, PDF. அதிகபட்சம்: 25MB.",
        btn_voice_input: "குரல் உள்ளீடு",
        btn_voice_listening: "கேட்கிறது... பேசுங்கள்",
        voice_hint: "நேரடியாக தமிழில் பேச மைக் ஐகானை அழுத்தவும்.",
        btn_cancel: "ரத்து செய்",
        btn_submit_grievance: "சமர்ப்பிக்கவும்",

        // Admin Dashboard
        admin_console_title: "குறைதீர்ப்பு நிர்வாகம்",
        admin_badge: "அதிகாரி தளம்",
        admin_sub: "மத்திய கண்காணிப்பு மற்றும் நடவடிக்கை தளம்",
        btn_export_csv: "எக்செல் ஏற்றுமதி",
        btn_print_pdf: "அறிக்கை அச்சிடுக",
        kpi_total_inflow: "மொத்த புகார்கள்",
        kpi_pending_action: "நிலுவையில்",
        kpi_under_investigation: "நடவடிக்கையில்",
        kpi_resolved_cases: "தீர்க்கப்பட்டவை",
        kpi_sla_breaches: "காலக்கெடு முடிந்தது",
        kpi_sla_score: "தீர்வு விகிதம்",
        filter_search_placeholder: "தேட...",
        opt_all_categories: "அனைத்து துறைகளும்",
        opt_all_statuses: "அனைத்து நிலைகளும்",
        opt_all_sla: "அனைத்து காலக்கெடுகளும்",
        filter_location_placeholder: "இடத்தை தேர்வு செய்க",
        opt_sla_ontrack: "நேரத்தில்",
        opt_sla_approaching: "காலக்கெடு நெருங்குகிறது",
        opt_sla_breached: "காலக்கெடு முடிந்தது",
        btn_apply_filter: "வடிகட்டு",
        records_title: "புகார் பதிவுகள்",
        th_officer_action: "ஆய்வு மற்றும் நடவடிக்கை",
        btn_review_action: "ஆய்வு செய்க",
        chart_category_title: "துறை வாரியான புகார்கள்",
        chart_status_title: "நிலை பகிர்வு",
        chart_priority_title: "முன்னுரிமை பகிர்வு",
        modal_review_title: "புகார் ஆய்வு",
        lbl_citizen_name: "குடிமகன் பெயர்:",
        lbl_location_ward: "இடம்:",
        lbl_dept: "துறை:",
        lbl_lodged_on: "பதிவுசெய்த தேதி:",
        lbl_original_text: "அசல் புகார்:",
        lbl_translated_text: "ஆங்கில மொழிபெயர்ப்பு:",
        lbl_evidence: "இணைக்கப்பட்ட ஆதாரம்:",
        lbl_no_media: "ஆதாரம் எதுவும் இணைக்கப்படவில்லை.",
        lbl_update_status: "நிலையை மாற்றவும்:",
        lbl_reassign_dept: "துறையை மாற்றவும்:",
        lbl_admin_remarks: "அதிகாரப்பூர்வ கருத்துகள்:",
        admin_remarks_placeholder: "நடவடிக்கை குறிப்புகளை உள்ளிடவும்",
        btn_save_notify: "சேமித்து தெரிவிக்கவும்",

        // Track Page
        track_page_title: "புகார் நிலையை கண்காணிக்கவும்",
        track_card_label: "மற்றொரு புகாரை தேட:",
        track_input_placeholder: "புகார் எண் (எ.கா. 1, 2, 102)",
        btn_track_now: "காண்க",
        timeline_heading: "புகார் தீர்வு நிலைகள்",
        stage_lodged: "பதிவு செய்யப்பட்டது",
        stage_assigned: "ஒதுக்கப்பட்டது",
        stage_inprogress: "நடவடிக்கையில்",
        stage_action: "நடவடிக்கை எடுக்கப்பட்டது",
        stage_resolved: "தீர்க்கப்பட்டது",
        sla_box_resolved: "புகார் அரசு காலக்கெடுவுக்குள் தீர்க்கப்பட்டது",
        sla_box_breached: "காலக்கெடு முடிந்தது — மாவட்ட ஆட்சியருக்கு மாற்றப்பட்டது",
        sla_box_approaching: "காலக்கெடு நெருங்குகிறது",
        sla_box_ontrack: "மீதமுள்ள நாட்கள்",
        target_date_label: "இலக்கு தேதி:",
        th_citizen_name: "குடிமகன் பெயர்",
        th_assigned_dept: "துறை",
        th_location: "இடம்",
        th_language: "மொழி",
        th_citizen_desc: "விளக்கம்",
        th_translated_desc: "ஆங்கில மொழிபெயர்ப்பு",
        th_admin_remarks: "அதிகாரி கருத்து",
        btn_return_dashboard: "திரும்புக",
        btn_confirm_resolved: "தீர்க்கப்பட்டதாக உறுதி செய்க",
        track_empty_title: "நிலையை காண்க",
        track_empty_desc: "புகார் நிலையை காண சரியான எண்ணை உள்ளிடவும்.",

        // Status & SLA
        status_pending: "நிலுவையில்",
        status_in_progress: "நடவடிக்கையில்",
        status_resolved: "தீர்க்கப்பட்டது",
        sla_on_track: "நேரத்தில்",
        sla_approaching: "காலக்கெடு நெருங்குகிறது",
        sla_breached: "காலக்கெடு முடிந்தது",

        // Categories
        cat_water: "குடிநீர் விநியோகம்",
        cat_electricity: "மின்சாரம் மற்றும் ஆற்றல்",
        cat_roads: "சாலைகள் மற்றும் உள்கட்டமைப்பு",
        cat_sanitation: "துப்புரவு மற்றும் கழிவு மேலாண்மை",
        cat_health: "சுகாதாரம் மற்றும் மருத்துவமனை",
        cat_revenue: "வருவாய் மற்றும் நில ஆவணங்கள்",
        cat_education: "கல்வி மற்றும் பள்ளிகள்",
        cat_other: "பொது நிர்வாகம் மற்றும் பிற",

        // Priority
        prio_low: "குறைந்த",
        prio_medium: "நடுத்தர",
        prio_high: "உயர்",
        prio_emergency: "அவசரம்"
    },

    te: {
        // Nav & Header
        portal_title: "గవ్‌టెక్ సి.ఆర్.ఎమ్",
        portal_sub: "పౌర ఫిర్యాదుల పరిష్కార వేదిక",
        official_gov: "భారత ప్రభుత్వం | అధికారిక ప్రజా ఫిర్యాదుల విభాగం",
        national_helpline: "జాతీయ హెల్ప్‌లైన్: 1800-11-4000 (టోల్ ఫ్రీ)",
        text_size: "అక్షర పరిమాణం:",
        high_contrast: "హై కాంట్రాస్ట్",
        nav_home: "హోమ్",
        nav_dashboard: "పౌర పోర్టల్",
        nav_admin: "అడ్మిన్ డాష్‌బోర్డ్",
        nav_track: "ట్రాక్ చేయండి",
        nav_about: "గురించి",
        nav_contact: "హెల్ప్‌లైన్",
        nav_login: "లాగిన్",
        nav_register: "రిజిస్ట్రేషన్",
        nav_logout: "లాగౌట్",
        
        // Home Page
        namaskaram: "నమస్కారము",
        hero_tagline: "పారదర్శకమైన మరియు సమయపరిమితి గల ఫిర్యాదుల పరిష్కారం",
        hero_desc: "పౌరులను నేరుగా ప్రభుత్వ అధికారులతో అనుసంధానించే డిజిటల్ వేదిక. ఫిర్యాదు చేయండి, స్థితిని ట్రాక్ చేయండి.",
        btn_login: "లాగిన్",
        btn_register: "రిజిస్ట్రేషన్",
        btn_about_modal: "పోర్టల్ గురించి",
        btn_contact_modal: "హెల్ప్‌లైన్ & సంప్రదించండి",
        track_quick_placeholder: "ఫిర్యాదు ఐడీ నమోదు చేయండి (ఉదా. 1, 2, 102)...",
        track_quick_btn: "ట్రాక్ చేయండి",
        quick_demo_label: "డెమో యాక్సెస్:",
        demo_citizen_btn: "డెమో పౌర పోర్టల్",
        demo_admin_btn: "డెమో అడ్మిన్ డాష్‌బోర్డ్",
        stat_total_registered: "మొత్తం నమోదైన ఫిర్యాదులు",
        stat_redressed: "పరిష్కరించబడినవి",
        stat_under_investigation: "పరిశీలనలో ఉన్నవి",
        stat_sla_compliance: "పరిష్కార రేటు",
        process_badge: "పారదర్శక ప్రక్రియ",
        process_heading: "ఫిర్యాదు పరిష్కార విధానం",
        process_sub: "సకాలంలో పరిష్కారం అందించే 4 సులభమైన దశలు.",
        step1_title: "1. ఫిర్యాదు సమర్పించండి",
        step1_desc: "మీ భాషలో వివరించండి లేదా వాయిస్ ఇన్‌పుట్ ఉపయోగించండి. ఫోటోలు జతచేయండి.",
        step2_title: "2. ఆటో విభాగ కేటాయింపు",
        step2_desc: "సంబంధిత శాఖకు గడువుతో సహా స్వయంచాలకంగా పంపబడుతుంది.",
        step3_title: "3. క్షేత్రస్థాయి చర్య",
        step3_desc: "అధికారులు పరిశీలించి పరిష్కార వివరాలను నమోదు చేస్తారు.",
        step4_title: "4. పరిష్కారం & నిర్ధారణ",
        step4_desc: "పరిష్కారం కాగానే పౌరునికి వెంటనే సమాచారం అందుతుంది.",
        dept_badge: "విభాగాలు",
        dept_heading: "ప్రధాన ప్రజా సేవలు",
        dept_sub: "అన్ని శాఖల ద్వారా వేగవంతమైన పరిష్కారం.",
        dept_water: "తాగునీటి సరఫరా",
        dept_water_sub: "పైప్‌లైన్లు మరియు నాణ్యత",
        dept_elec: "విద్యుత్ సరఫరా",
        dept_elec_sub: "కోతలు మరియు మీటర్లు",
        dept_roads: "రహదారులు మరియు నిర్మాణాలు",
        dept_roads_sub: "గుంతలు మరియు దీపాలు",
        dept_sanitation: "పారిశుద్ధ్యం మరియు వ్యర్థాలు",
        dept_sanitation_sub: "చెత్త తొలగింపు మరియు డ్రైనేజీ",

        // Login Page
        login_title: "లాగిన్",
        login_sub: "సురక్షిత పౌర మరియు పాలనా ప్రవేశం",
        role_label: "పాత్రను ఎంచుకోండి",
        role_citizen_opt: "పౌరుడు / సాధారణ వినియోగదారు",
        role_admin_opt: "అడ్మినిస్ట్రేటర్ / అధికారి",
        login_id_label: "లాగిన్ ఐడీ / యూజర్‌నేమ్",
        login_id_placeholder: "యూజర్‌నేమ్ నమోదు చేయండి",
        password_label: "పాస్‌వర్డ్",
        password_placeholder: "పాస్‌వర్డ్ నమోదు చేయండి",
        forgot_password_link: "పాస్‌వర్డ్ మర్చిపోయారా?",
        remember_me_label: "నన్ను లాగిన్ లో ఉంచండి",
        login_btn: "లాగిన్ అవ్వండి",
        quick_demo_login_label: "1-క్లిక్ డెమో లాగిన్:",
        no_account_text: "ఖాతా లేదా?",
        sign_up_link: "ఇక్కడ నమోదు చేసుకోండి",
        forgot_modal_title: "పాస్‌వర్డ్ రీసెట్",
        forgot_modal_desc: "రిజిస్టర్డ్ మొబైల్ లేదా ఈమెయిల్ నమోదు చేయండి. ఓటీపీ పంపబడుతుంది.",
        forgot_input_label: "మొబైల్ లేదా ఈమెయిల్",
        forgot_admin_notice: "అధికారిక సహాయం కోసం జిల్లా నోడల్ అధికారిని సంప్రదించండి.",
        forgot_cancel_btn: "రద్దు",
        forgot_submit_btn: "ఓటీపీ పంపండి",

        // Registration Page
        register_title: "పౌర మరియు అధికారి నమోదు",
        register_sub: "ఫిర్యాదుల పరిష్కారం కోసం మీ ప్రొఫైల్ సృష్టించండి",
        reg_role_label: "నమోదు పాత్ర",
        reg_role_hint: "ఫిర్యాదు కోసం 'పౌరుడు', పరిష్కారం కోసం 'అధికారి' ఎంచుకోండి.",
        reg_username_label: "కోరుకున్న యూజర్‌నేమ్",
        reg_fullname_label: "పూర్తి పేరు",
        reg_fullname_placeholder: "పూర్తి పేరు నమోదు చేయండి",
        reg_email_label: "ఈమెయిల్ చిరునామా",
        reg_email_placeholder: "name@example.com",
        reg_mobile_label: "మొబైల్ సంఖ్య (10 అంకెలు)",
        reg_mobile_placeholder: "10 అంకెల మొబైల్",
        reg_district_label: "జిల్లా / నగరం",
        reg_district_placeholder: "జిల్లా లేదా నగరం",
        reg_address_label: "చిరునామా",
        reg_address_placeholder: "పూర్తి చిరునామా నమోదు చేయండి",
        reg_password1_label: "పాస్‌వర్డ్",
        reg_password1_hint: "కనీసం 8 అక్షరాలు.",
        reg_password2_label: "పాస్‌వర్డ్ నిర్ధారించండి",
        reg_terms_label: "ఇచ్చిన సమాచారం నిజమైనదని ధృవీకరిస్తున్నాను.",
        reg_submit_btn: "ఖాతా సృష్టించండి",
        already_account_text: "ఇప్పటికే ఖాతా ఉందా?",
        login_here_link: "ఇక్కడ లాగిన్ అవ్వండి",

        // Citizen Dashboard
        citizen_welcome: "నమస్కారం,",
        verified_citizen_badge: "ధృవీకరించబడిన పౌరుడు",
        citizen_id_label: "పౌర ఐడీ:",
        btn_file_grievance: "కొత్త ఫిర్యాదు చేయండి",
        kpi_total_submitted: "మొత్తం సమర్పించినవి",
        kpi_pending_triage: "పరిశీలనలో ఉన్నవి",
        kpi_in_progress: "పురోగతిలో ఉన్నవి",
        kpi_resolved: "పరిష్కరించబడినవి",
        history_title: "నా ఫిర్యాదుల చరిత్ర",
        search_grievances_placeholder: "వెతకండి...",
        th_id_title: "ఐడీ & శీర్షిక",
        th_category: "విభాగం",
        th_status: "స్థితి",
        th_sla_target: "గడువు",
        th_action: "చర్య",
        btn_track: "ట్రాక్ చేయండి",
        no_grievances_title: "ఫిర్యాదులు ఏవీ లేవు",
        no_grievances_desc: "మీ ప్రాంతంలో సమస్య ఉందా? వెంటనే నమోదు చేయండి.",
        btn_file_first: "మొదటి ఫిర్యాదు చేయండి",
        updates_title: "నోటిఫికేషన్లు",
        unread_badge: "కొత్తది",
        mark_as_read: "చదివినట్లు గుర్తించండి",
        no_updates_desc: "తాజా నోటిఫికేషన్లు ఏవీ లేవు.",
        support_title: "సహాయం కావాలా?",
        support_desc: "24x7 ఉచిత హెల్ప్‌లైన్‌కు కాల్ చేయవచ్చు.",
        view_nodal_btn: "కేంద్రాలను చూడండి",

        // Form Modal
        modal_file_title: "కొత్త ఫిర్యాదు సమర్పించండి",
        modal_file_desc: "సరైన వివరాలు ఇవ్వండి. వాయిస్ ఇన్‌పుట్ ద్వారా కూడా మాట్లాడవచ్చు.",
        field_title_label: "ఫిర్యాదు శీర్షిక",
        field_name_label: "పౌరుని పేరు",
        field_lang_label: "భాష",
        field_category_label: "శాఖ / విభాగం",
        field_priority_label: "ప్రాధాన్యత",
        field_location_label: "ప్రదేశం / వార్డు",
        field_desc_label: "పూర్తి వివరణ",
        field_evidence_label: "ఆధారాలు జతచేయండి",
        evidence_hint: "ఫార్మాట్లు: JPG, PNG, MP4, PDF. గరిష్ట పరిమాణం: 25MB.",
        btn_voice_input: "వాయిస్ ఇన్‌పుట్",
        btn_voice_listening: "వింటున్నాము... మాట్లాడండి",
        voice_hint: "మైక్ క్లిక్ చేసి నేరుగా మాట్లాడండి.",
        btn_cancel: "రద్దు",
        btn_submit_grievance: "సమర్పించండి",

        // Admin Dashboard
        admin_console_title: "ఫిర్యాదుల నిర్వహణ పాలన",
        admin_badge: "అధికారిక లాగిన్",
        admin_sub: "కేంద్ర పర్యవేక్షణ మరియు కార్యాచరణ వేదిక",
        btn_export_csv: "ఎక్సెల్ ఎగుమతి",
        btn_print_pdf: "నివేదిక ప్రింట్ చేయండి",
        kpi_total_inflow: "మొత్తం ఫిర్యాదులు",
        kpi_pending_action: "పెండింగ్ చర్య",
        kpi_under_investigation: "పురోగతిలో ఉన్నవి",
        kpi_resolved_cases: "పరిష్కరించబడినవి",
        kpi_sla_breaches: "గడువు దాటినవి",
        kpi_sla_score: "పరిష్కార స్కోరు",
        filter_search_placeholder: "శోధించండి...",
        opt_all_categories: "అన్ని విభాగాలు",
        opt_all_statuses: "అన్ని స్థితులు",
        opt_all_sla: "అన్ని గడువులు",
        filter_location_placeholder: "ప్రదేశం ఎంచుకోండి",
        opt_sla_ontrack: "సమయ పరిమితిలో",
        opt_sla_approaching: "గడువు ముగియబోతోంది",
        opt_sla_breached: "గడువు దాటింది",
        btn_apply_filter: "ఫిల్టర్",
        records_title: "ఫిర్యాదు రికార్డులు",
        th_officer_action: "సమీక్ష & చర్య",
        btn_review_action: "సమీక్షించండి",
        chart_category_title: "విభాగాల వారీగా ఫిర్యాదులు",
        chart_status_title: "స్థితి వర్గీకరణ",
        chart_priority_title: "ప్రాధాన్యత వర్గీకరణ",
        modal_review_title: "ఫిర్యాదు సమీక్ష",
        lbl_citizen_name: "పౌరుని పేరు:",
        lbl_location_ward: "ప్రదేశం:",
        lbl_dept: "శాఖ:",
        lbl_lodged_on: "నమోదైన తేదీ:",
        lbl_original_text: "అసలు ఫిర్యాదు:",
        lbl_translated_text: "ఇంగ్లీష్ అనువాదం:",
        lbl_evidence: "జతచేసిన ఆధారాలు:",
        lbl_no_media: "ఆధారాలు ఏవీ జతచేయబడలేదు.",
        lbl_update_status: "స్థితిని నవీకరించండి:",
        lbl_reassign_dept: "శాఖను మార్చండి:",
        lbl_admin_remarks: "అధికారిక వ్యాఖ్యలు:",
        admin_remarks_placeholder: "చర్య వివరాలు నమోదు చేయండి",
        btn_save_notify: "సేవ్ చేసి తెలియజేయండి",

        // Track Page
        track_page_title: "ఫిర్యాదు స్థితిని ట్రాక్ చేయండి",
        track_card_label: "మరొక ఫిర్యాదు శోధించండి:",
        track_input_placeholder: "ఫిర్యాదు సంఖ్య (ఉదా. 1, 2, 102)",
        btn_track_now: "ట్రాక్ చేయండి",
        timeline_heading: "ఫిర్యాదు పరిష్కార దశలు",
        stage_lodged: "నమోదైంది",
        stage_assigned: "శాఖ కేటాయించబడింది",
        stage_inprogress: "పురోగతిలో ఉంది",
        stage_action: "చర్య తీసుకోబడింది",
        stage_resolved: "పరిష్కరించబడింది",
        sla_box_resolved: "ప్రభుత్వ గడువులోగా విజయవంతంగా పరిష్కరించబడింది",
        sla_box_breached: "గడువు దాటింది — కలెక్టర్‌కు నివేదించబడింది",
        sla_box_approaching: "గడువు ముగియబోతోంది",
        sla_box_ontrack: "మిగిలిన రోజులు",
        target_date_label: "లక్ష్య తేదీ:",
        th_citizen_name: "పౌరుని పేరు",
        th_assigned_dept: "శాఖ",
        th_location: "ప్రదేశం",
        th_language: "భాష",
        th_citizen_desc: "వివరణ",
        th_translated_desc: "ఇంగ్లీష్ అనువాదం",
        th_admin_remarks: "అధికారి వ్యాఖ్యలు",
        btn_return_dashboard: "వెనక్కి వెళ్ళండి",
        btn_confirm_resolved: "పరిష్కారమైనట్లు నిర్ధారించండి",
        track_empty_title: "స్థితిని తనిఖీ చేయండి",
        track_empty_desc: "పురోగతిని చూడటానికి సరైన సంఖ్యను నమోదు చేయండి.",

        // Status & SLA
        status_pending: "పెండింగ్",
        status_in_progress: "పురోగతిలో ఉంది",
        status_resolved: "పరిష్కరించబడింది",
        sla_on_track: "సమయ పరిమితిలో",
        sla_approaching: "సమయం ముగియబోతోంది",
        sla_breached: "సమయం దాటింది",

        // Categories
        cat_water: "తాగునీరు & నాణ్యత",
        cat_electricity: "విద్యుత్ సరఫరా",
        cat_roads: "రహదారులు & నిర్మాణాలు",
        cat_sanitation: "పారిశుద్ధ్యం & వ్యర్థాలు",
        cat_health: "వైద్య సేవలు & ఆసుపత్రులు",
        cat_revenue: "రెవెన్యూ & భూ రికార్డులు",
        cat_education: "పాఠశాలలు & విద్య",
        cat_other: "సాధారణ పరిపాలన & ఇతర",

        // Priority
        prio_low: "తక్కువ",
        prio_medium: "మధ్యస్థం",
        prio_high: "అధిక",
        prio_emergency: "అత్యవసరం"
    },

    bn: {
        // Nav & Header
        portal_title: "গভটেক সিআরএম",
        portal_sub: "নাগরিক অভিযোগ প্রতিকার পোর্টাল",
        official_gov: "ভারত সরকার | নাগরিক অভিযোগ প্রতিকার সেল",
        national_helpline: "জাতীয় হেল্পলাইন: 1800-11-4000 (টোল ফ্রি)",
        text_size: "ফন্ট সাইজ:",
        high_contrast: "হাই কনট্রাস্ট",
        nav_home: "হোম",
        nav_dashboard: "নাগরিক পোর্টাল",
        nav_admin: "প্রশাসনিক ড্যাশবোর্ড",
        nav_track: "অভিযোগ ট্র্যাক করুন",
        nav_about: "সম্পর্কে",
        nav_contact: "হেল্পলাইন",
        nav_login: "লগইন",
        nav_register: "নিবন্ধন",
        nav_logout: "লগআউট",
        
        // Home Page
        namaskaram: "নমস্কার",
        hero_tagline: "স্বচ্ছ এবং সময়োপযোগী অভিযোগ প্রতিকারের মাধ্যমে নাগরিক ক্ষমতায়ন",
        hero_desc: "নাগরিকদের সরাসরি সরকারি কর্মকর্তাদের সাথে সংযুক্ত করার ডিজিটাল প্ল্যাটফর্ম। অভিযোগ জমা দিন, অবস্থা দেখুন এবং সমাধান পান।",
        btn_login: "লগইন",
        btn_register: "নিবন্ধন",
        btn_about_modal: "পোর্টাল সম্পর্কে",
        btn_contact_modal: "যোগাযোগ ও হেল্পলাইন",
        track_quick_placeholder: "অভিযোগ আইডি লিখুন (যেমন 1, 2, 102)...",
        track_quick_btn: "অবস্থা দেখুন",
        quick_demo_label: "ডেমো অ্যাক্সেস:",
        demo_citizen_btn: "ডেমো নাগরিক পোর্টাল",
        demo_admin_btn: "ডেমো প্রশাসনিক ড্যাশবোর্ড",
        stat_total_registered: "মোট নিবন্ধিত অভিযোগ",
        stat_redressed: "নিষ্পত্তি হয়েছে",
        stat_under_investigation: "তদন্তাধীন",
        stat_sla_compliance: "নিষ্পত্তির হার",
        process_badge: "স্বচ্ছ প্রক্রিয়া",
        process_heading: "অভিযোগ সমাধানের প্রক্রিয়া",
        process_sub: "সময়োপযোগী সমাধানের ৪টি সহজ পদক্ষেপ।",
        step1_title: "১. অভিযোগ জমা দিন",
        step1_desc: "নিজের ভাষায় লিখুন বা ভয়েস ইনপুট ব্যবহার করুন। ছবি ও নথি যুক্ত করুন।",
        step2_title: "২. স্বয়ংক্রিয় বিভাগ বরাদ্দ",
        step2_desc: "সময়সীমা সহ স্বয়ংক্রিয়ভাবে সংশ্লিষ্ট বিভাগে পাঠানো হয়।",
        step3_title: "৩. বাস্তব পদক্ষেপ",
        step3_desc: "কর্মকর্তারা সরেজমিনে পরিদর্শন করে পদক্ষেপ নথিভুক্ত করেন।",
        step4_title: "৪. নিষ্পত্তি ও প্রতিক্রিয়া",
        step4_desc: "সমাধানের সাথে সাথে নাগরিককে তাৎক্ষণিক বার্তা পাঠানো হয়।",
        dept_badge: "বিভাগসমূহ",
        dept_heading: "প্রধান জনসেবা",
        dept_sub: "সকল প্রশাসনিক কর্তৃপক্ষের মাধ্যমে দ্রুত সেবা।",
        dept_water: "জল সরবরাহ",
        dept_water_sub: "পাইপলাইন ও গুণমান",
        dept_elec: "বিদ্যুৎ ও শক্তি",
        dept_elec_sub: "বিদ্যুৎ বিভ্রাট ও মিটার",
        dept_roads: "রাস্তা ও পূর্ত",
        dept_roads_sub: "মেরামত ও পথবাতি",
        dept_sanitation: "পরিচ্ছন্নতা ও বর্জ্য",
        dept_sanitation_sub: "বর্জ্য অপসারণ ও নিকাশি",

        // Login Page
        login_title: "লগইন",
        login_sub: "নিরাপদ নাগরিক ও প্রশাসনিক প্রবেশদ্বার",
        role_label: "ভূমিকা নির্বাচন করুন",
        role_citizen_opt: "নাগরিক / সাধারণ ব্যবহারকারী",
        role_admin_opt: "প্রশাসক / অভিযোগ প্রতিকার কর্মকর্তা",
        login_id_label: "লগইন আইডি / ব্যবহারকারীর নাম",
        login_id_placeholder: "ব্যবহারকারীর নাম লিখুন",
        password_label: "পাসওয়ার্ড",
        password_placeholder: "পাসওয়ার্ড লিখুন",
        forgot_password_link: "পাসওয়ার্ড ভুলে গেছেন?",
        remember_me_label: "আমাকে সাইন ইন রাখুন",
        login_btn: "লগইন করুন",
        quick_demo_login_label: "১-ক্লিক ডেমো লগইন:",
        no_account_text: "অ্যাকাউন্ট নেই?",
        sign_up_link: "এখানে নিবন্ধন করুন",
        forgot_modal_title: "পাসওয়ার্ড পুনরায় সেট",
        forgot_modal_desc: "নিবন্ধিত মোবাইল বা ইমেল লিখুন। ওটিপি পাঠানো হবে।",
        forgot_input_label: "মোবাইল বা ইমেল",
        forgot_admin_notice: "প্রশাসনিক সহায়তার জন্য জেলা কর্মকর্তার সাথে যোগাযোগ করুন।",
        forgot_cancel_btn: "বাতিল",
        forgot_submit_btn: "ওটিপি পাঠান",

        // Registration Page
        register_title: "নাগরিক ও কর্মকর্তা নিবন্ধন",
        register_sub: "অভিযোগ প্রতিকারের জন্য আপনার প্রোফাইল তৈরি করুন",
        reg_role_label: "নিবন্ধনের ভূমিকা",
        reg_role_hint: "অভিযোগের জন্য 'নাগরিক', সমাধানের জন্য 'কর্মকর্তা' নির্বাচন করুন।",
        reg_username_label: "ব্যবহারকারীর নাম",
        reg_fullname_label: "পূর্ণ নাম",
        reg_fullname_placeholder: "পূর্ণ নাম লিখুন",
        reg_email_label: "ইমেল ঠিকানা",
        reg_email_placeholder: "name@example.com",
        reg_mobile_label: "মোবাইল নম্বর (১০ অঙ্ক)",
        reg_mobile_placeholder: "১০ অঙ্কের মোবাইল নম্বর",
        reg_district_label: "জেলা / শহর",
        reg_district_placeholder: "জেলা বা শহর",
        reg_address_label: "ঠিকানা",
        reg_address_placeholder: "সম্পূর্ণ ঠিকানা লিখুন",
        reg_password1_label: "পাসওয়ার্ড",
        reg_password1_hint: "কমপক্ষে ৮টি অক্ষর।",
        reg_password2_label: "পাসওয়ার্ড নিশ্চিত করুন",
        reg_terms_label: "আমি নিশ্চিত করছি যে প্রদত্ত তথ্য সঠিক।",
        reg_submit_btn: "নিবন্ধন সম্পন্ন করুন",
        already_account_text: "ইতিমধ্যে অ্যাকাউন্ট আছে?",
        login_here_link: "এখানে লগইন করুন",

        // Citizen Dashboard
        citizen_welcome: "নমস্কার,",
        verified_citizen_badge: "যাচাইকৃত নাগরিক",
        citizen_id_label: "নাগরিক আইডি:",
        btn_file_grievance: "নতুন অভিযোগ জমা দিন",
        kpi_total_submitted: "মোট জমা",
        kpi_pending_triage: "বিচারাধীন",
        kpi_in_progress: "চলমান",
        kpi_resolved: "সমাধান হয়েছে",
        history_title: "অভিযোগের ইতিহাস",
        search_grievances_placeholder: "খুঁজুন...",
        th_id_title: "আইডি ও শিরোনাম",
        th_category: "বিভাগ",
        th_status: "অবস্থা",
        th_sla_target: "সময়সীমা",
        th_action: "পদক্ষেপ",
        btn_track: "দেখুন",
        no_grievances_title: "কোনো অভিযোগ নথিভুক্ত নেই",
        no_grievances_desc: "আপনার এলাকায় কোনো সমস্যা আছে? প্রতিকারের জন্য অভিযোগ জমা দিন।",
        btn_file_first: "প্রথম অভিযোগ জমা দিন",
        updates_title: "আপডেট ও বিজ্ঞপ্তি",
        unread_badge: "নতুন",
        mark_as_read: "পড়া হয়েছে চিহ্নিত করুন",
        no_updates_desc: "কোনো নতুন বিজ্ঞপ্তি নেই।",
        support_title: "সহায়তা প্রয়োজন?",
        support_desc: "টোল-ফ্রি হেল্পলাইনে যোগাযোগ করতে পারেন।",
        view_nodal_btn: "কেন্দ্রসমূহ দেখুন",

        // Form Modal
        modal_file_title: "নতুন অভিযোগ জমা দিন",
        modal_file_desc: "সঠিক বিবরণ প্রদান করুন। ভয়েস ইনপুট ব্যবহার করতে পারেন।",
        field_title_label: "অভিযোগের শিরোনাম",
        field_name_label: "নাগরিকের নাম",
        field_lang_label: "ভাষা",
        field_category_label: "বিভাগ",
        field_priority_label: "অগ্রাধিকার",
        field_location_label: "অবস্থান / ওয়ার্ড",
        field_desc_label: "বিস্তারিত বিবরণ",
        field_evidence_label: "প্রমাণ যুক্ত করুন",
        evidence_hint: "ফরম্যাট: JPG, PNG, MP4, PDF. সর্বোচ্চ আকার: 25MB.",
        btn_voice_input: "ভয়েস ইনপুট",
        btn_voice_listening: "শুনছি... বলুন",
        voice_hint: "মাইকে ক্লিক করে সরাসরি কথা বলুন।",
        btn_cancel: "বাতিল",
        btn_submit_grievance: "অভিযোগ প্রেরণ করুন",

        // Admin Dashboard
        admin_console_title: "অভিযোগ প্রতিকার প্রশাসন",
        admin_badge: "কর্মকর্তা স্তর",
        admin_sub: "কেন্দ্রীয় নজরদারি ও ব্যবস্থা গ্রহণ কনসোল",
        btn_export_csv: "এক্সেল রপ্তানি",
        btn_print_pdf: "প্রতিবেদন মুদ্রণ",
        kpi_total_inflow: "মোট অভিযোগ",
        kpi_pending_action: "অমীমাংসিত",
        kpi_under_investigation: "চলমান",
        kpi_resolved_cases: "সমাধান হয়েছে",
        kpi_sla_breaches: "সময়সীমা উত্তীর্ণ",
        kpi_sla_score: "নিষ্পত্তির হার",
        filter_search_placeholder: "অনুসন্ধান করুন...",
        opt_all_categories: "সমস্ত বিভাগ",
        opt_all_statuses: "সমস্ত অবস্থা",
        opt_all_sla: "সমস্ত সময়সীমা",
        filter_location_placeholder: "অবস্থান ফিল্টার",
        opt_sla_ontrack: "সময়সীমার মধ্যে",
        opt_sla_approaching: "সময়সীমা আসন্ন",
        opt_sla_breached: "সময়সীমা উত্তীর্ণ",
        btn_apply_filter: "ফিল্টার",
        records_title: "অভিযোগ নথি",
        th_officer_action: "পর্যালোচনা ও ব্যবস্থা",
        btn_review_action: "পর্যালোচনা করুন",
        chart_category_title: "বিভাগ ভিত্তিক অভিযোগ",
        chart_status_title: "অবস্থা বণ্টন",
        chart_priority_title: "অগ্রাধিকার বণ্টন",
        modal_review_title: "অভিযোগ পর্যালোচনা",
        lbl_citizen_name: "নাগরিকের নাম:",
        lbl_location_ward: "অবস্থান:",
        lbl_dept: "বিভাগ:",
        lbl_lodged_on: "জমা দেওয়ার তারিখ:",
        lbl_original_text: "মূল বিবরণ:",
        lbl_translated_text: "ইংরেজি অনুবাদ:",
        lbl_evidence: "সংযুক্ত প্রমাণ:",
        lbl_no_media: "কোনো প্রমাণ সংযুক্ত নেই।",
        lbl_update_status: "অবস্থা পরিবর্তন:",
        lbl_reassign_dept: "বিভাগ পুনর্বণ্টন:",
        lbl_admin_remarks: "সরকারি মন্তব্য:",
        admin_remarks_placeholder: "পদক্ষেপের বিবরণ লিখুন",
        btn_save_notify: "সংরক্ষণ ও জানান",

        // Track Page
        track_page_title: "অভিযোগের অবস্থা ট্র্যাক করুন",
        track_card_label: "অন্য অভিযোগ ট্র্যাক করুন:",
        track_input_placeholder: "অভিযোগ আইডি লিখুন (যেমন 1, 2, 102)",
        btn_track_now: "দেখুন",
        timeline_heading: "অভিযোগ অগ্রগতি ট্র্যাকার",
        stage_lodged: "জমা হয়েছে",
        stage_assigned: "বিভাগ বরাদ্দ",
        stage_inprogress: "চলমান",
        stage_action: "পদক্ষেপ গৃহীত",
        stage_resolved: "সমাধান হয়েছে",
        sla_box_resolved: "সময়সীমার মধ্যে সফলভাবে সমাধান হয়েছে",
        sla_box_breached: "সময়সীমা উত্তীর্ণ — জেলাশাসকের নিকট প্রেরিত",
        sla_box_approaching: "সময়সীমা আসন্ন",
        sla_box_ontrack: "বাকি দিন",
        target_date_label: "লক্ষ্য তারিখ:",
        th_citizen_name: "নাগরিকের নাম",
        th_assigned_dept: "বরাদ্দ বিভাগ",
        th_location: "অবস্থান",
        th_language: "ভাষা",
        th_citizen_desc: "বিবরণ",
        th_translated_desc: "ইংরেজি অনুবাদ",
        th_admin_remarks: "সরকারি মন্তব্য",
        btn_return_dashboard: "ফিরে যান",
        btn_confirm_resolved: "সমাধান নিশ্চিত করুন",
        track_empty_title: "অবস্থা দেখুন",
        track_empty_desc: "অগ্রগতি দেখতে সঠিক অভিযোগ নম্বর লিখুন।",

        // Status & SLA
        status_pending: "মুলতুবি",
        status_in_progress: "চলমান",
        status_resolved: "সমাধান হয়েছে",
        sla_on_track: "সময়সীমার মধ্যে",
        sla_approaching: "সময়সীমা আসন্ন",
        sla_breached: "সময়সীমা উত্তীর্ণ",

        // Categories
        cat_water: "জল সরবরাহ ও গুণমান",
        cat_electricity: "বিদ্যুৎ সরবরাহ",
        cat_roads: "রাস্তা ও পরিকাঠামো",
        cat_sanitation: "পরিচ্ছন্নতা ও বর্জ্য ব্যবস্থাপনা",
        cat_health: "স্বাস্থ্য ও হাসপাতাল",
        cat_revenue: "রাজস্ব ও ভূমি রেকর্ড",
        cat_education: "শিক্ষা ও বিদ্যালয়",
        cat_other: "সাধারণ প্রশাসন ও অন্যান্য",

        // Priority
        prio_low: "কম",
        prio_medium: "মাঝারি",
        prio_high: "উচ্চ",
        prio_emergency: "জরুরি"
    }
};

/**
 * Master Language Switching Engine
 * Translates innerText, input placeholders, aria labels, titles, and select options dynamically.
 */
function applyLanguage(lang) {
    if (!GovTechTranslations[lang]) lang = 'en';
    localStorage.setItem('govtech_lang', lang);

    // Sync all language dropdowns on page
    document.querySelectorAll('.govtech-lang-toggle').forEach(el => {
        if (el.value !== lang) el.value = lang;
    });

    const dict = GovTechTranslations[lang];

    // 1. Text elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = dict[key];
            } else {
                el.innerText = dict[key];
            }
        }
    });

    // 2. Placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key]) {
            el.placeholder = dict[key];
        }
    });

    // 3. ARIA labels (for screen readers)
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        const key = el.getAttribute('data-i18n-aria');
        if (dict[key]) {
            el.setAttribute('aria-label', dict[key]);
        }
    });

    // 4. Title tooltip attributes
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (dict[key]) {
            el.setAttribute('title', dict[key]);
        }
    });

    // 5. Select dropdown options
    document.querySelectorAll('option[data-i18n]').forEach(opt => {
        const key = opt.getAttribute('data-i18n');
        if (dict[key]) {
            opt.textContent = dict[key];
        }
    });

    // 6. Announce language change to screen readers
    const srLive = document.getElementById('sr-announcements');
    if (srLive) {
        const langNames = {
            en: 'English', hi: 'Hindi', mr: 'Marathi', sa: 'Sanskrit',
            ta: 'Tamil', te: 'Telugu', bn: 'Bengali'
        };
        srLive.textContent = `Language switched to ${langNames[lang] || lang}`;
    }

    // 7. Update voice recognition preference if active
    if (recognition) {
        const langLocaleMap = {
            en: 'en-IN', hi: 'hi-IN', mr: 'mr-IN', sa: 'hi-IN',
            ta: 'ta-IN', te: 'te-IN', bn: 'bn-IN'
        };
        recognition.lang = langLocaleMap[lang] || 'en-IN';
    }
}

// 👁️ High Contrast Mode Controller
function toggleHighContrast() {
    const isHC = document.body.classList.toggle('high-contrast');
    localStorage.setItem('govtech_high_contrast', isHC ? 'true' : 'false');
    const srLive = document.getElementById('sr-announcements');
    if (srLive) {
        srLive.textContent = isHC ? "High contrast mode enabled" : "High contrast mode disabled";
    }
}

// 🔤 Font Size Scaling
function setFontSize(size) {
    document.body.classList.remove('font-sm', 'font-md', 'font-lg');
    if (size === 'sm') document.body.classList.add('font-sm');
    else if (size === 'lg') document.body.classList.add('font-lg');
    else document.body.classList.add('font-md');
    localStorage.setItem('govtech_font_size', size);
}

// 🎤 Web Speech Recognition (Voice-to-Text)
let recognition = null;
let isRecording = false;

function setupVoiceRecognition() {
    const micBtn = document.getElementById('btn-voice-input');
    const textInput = document.getElementById('complaint_text_input');

    if (!micBtn || !textInput) return;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        micBtn.onclick = () => alert("Web Speech API is not supported in this browser. Please use Google Chrome or Microsoft Edge.");
        return;
    }

    recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    const langLocaleMap = {
        en: 'en-IN', hi: 'hi-IN', mr: 'mr-IN', sa: 'hi-IN',
        ta: 'ta-IN', te: 'te-IN', bn: 'bn-IN'
    };
    const currentLang = localStorage.getItem('govtech_lang') || 'en';
    recognition.lang = langLocaleMap[currentLang] || 'en-IN';

    recognition.onstart = function() {
        isRecording = true;
        micBtn.classList.add('recording');
        const lang = localStorage.getItem('govtech_lang') || 'en';
        const dict = GovTechTranslations[lang] || GovTechTranslations['en'];
        micBtn.innerHTML = `<i class="bi bi-mic-fill text-white"></i> <span>${dict.btn_voice_listening || 'Listening...'}</span>`;
        micBtn.setAttribute('aria-pressed', 'true');
    };

    recognition.onresult = function(event) {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
            transcript += event.results[i][0].transcript;
        }
        textInput.value = (textInput.value ? textInput.value + ' ' : '') + transcript;
    };

    recognition.onerror = function(event) {
        console.error("Speech recognition error:", event.error);
        stopRecording();
    };

    recognition.onend = function() {
        stopRecording();
    };

    function stopRecording() {
        isRecording = false;
        micBtn.classList.remove('recording');
        const lang = localStorage.getItem('govtech_lang') || 'en';
        const dict = GovTechTranslations[lang] || GovTechTranslations['en'];
        micBtn.innerHTML = `<i class="bi bi-mic-fill"></i> <span data-i18n="btn_voice_input">${dict.btn_voice_input || 'Voice Input'}</span>`;
        micBtn.setAttribute('aria-pressed', 'false');
    }

    micBtn.onclick = function(e) {
        e.preventDefault();
        if (isRecording) {
            recognition.stop();
            stopRecording();
        } else {
            try {
                const lang = localStorage.getItem('govtech_lang') || 'en';
                recognition.lang = langLocaleMap[lang] || 'en-IN';
                recognition.start();
            } catch (err) {
                console.log(err);
            }
        }
    };
}

// 📎 Live Attachment Preview
function setupAttachmentPreview() {
    const fileInput = document.getElementById('attachment_input');
    const previewBox = document.getElementById('attachment_preview');
    if (!fileInput || !previewBox) return;

    fileInput.addEventListener('change', function() {
        const file = this.files[0];
        if (!file) {
            previewBox.style.display = 'none';
            previewBox.innerHTML = '';
            return;
        }

        previewBox.style.display = 'block';
        const fileType = file.type;

        if (fileType.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                previewBox.innerHTML = `
                    <div class="p-2 text-center">
                        <img src="${e.target.result}" alt="Preview" class="img-fluid rounded" style="max-height: 200px;">
                        <p class="small text-muted mt-1 mb-0">${file.name} (${(file.size/1024).toFixed(1)} KB)</p>
                    </div>`;
            };
            reader.readAsDataURL(file);
        } else if (fileType.startsWith('video/')) {
            const videoUrl = URL.createObjectURL(file);
            previewBox.innerHTML = `
                <div class="p-2 text-center">
                    <video controls style="max-height: 200px; width: 100%;">
                        <source src="${videoUrl}" type="${fileType}">
                        Your browser does not support video playback.
                    </video>
                    <p class="small text-muted mt-1 mb-0">${file.name}</p>
                </div>`;
        } else {
            previewBox.innerHTML = `
                <div class="p-3 text-center bg-light rounded">
                    <i class="bi bi-file-earmark-text text-primary fs-1"></i>
                    <p class="fw-semibold mb-0">${file.name}</p>
                    <p class="small text-muted mb-0">${(file.size/1024).toFixed(1)} KB</p>
                </div>`;
        }
    });
}

// 🔍 Client-side Complaint Filter
function filterComplaintsTable(query) {
    const rows = document.querySelectorAll('.complaint-data-row');
    const term = query.toLowerCase().trim();
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(term) ? '' : 'none';
    });
}

// 🖨️ PDF / Official Printable Report
function printGovReport() {
    window.print();
}

// 🚀 Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Restore High Contrast
    if (localStorage.getItem('govtech_high_contrast') === 'true') {
        document.body.classList.add('high-contrast');
    }

    // Restore Font Size
    const savedFontSize = localStorage.getItem('govtech_font_size') || 'md';
    setFontSize(savedFontSize);

    // Setup voice recognition & attachment preview
    setupVoiceRecognition();
    setupAttachmentPreview();

    // Apply Saved or Default Language
    const savedLang = localStorage.getItem('govtech_lang') || 'en';
    applyLanguage(savedLang);
});
