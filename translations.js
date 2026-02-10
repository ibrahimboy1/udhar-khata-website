// ============================================
// HISAB BANAO - TRANSLATIONS (25+ Languages)
// ============================================

const LANGUAGES = [
    { code: 'en', name: 'English', native: 'English' },
    { code: 'ur', name: 'Urdu', native: 'اردو', rtl: true },
    { code: 'ar', name: 'Arabic', native: 'العربية', rtl: true },
    { code: 'zh', name: 'Chinese', native: '中文' },
    { code: 'es', name: 'Spanish', native: 'Español' },
    { code: 'fr', name: 'French', native: 'Français' },
    { code: 'ru', name: 'Russian', native: 'Русский' },
    { code: 'pt', name: 'Portuguese', native: 'Português' },
    { code: 'de', name: 'German', native: 'Deutsch' },
    { code: 'ja', name: 'Japanese', native: '日本語' },
    { code: 'id', name: 'Indonesian', native: 'Bahasa Indonesia' },
    { code: 'tr', name: 'Turkish', native: 'Türkçe' },
    { code: 'bn', name: 'Bengali', native: 'বাংলা' },
    { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ' },
    { code: 'it', name: 'Italian', native: 'Italiano' },
    { code: 'ko', name: 'Korean', native: '한국어' },
    { code: 'vi', name: 'Vietnamese', native: 'Tiếng Việt' },
    { code: 'th', name: 'Thai', native: 'ไทย' },
    { code: 'nl', name: 'Dutch', native: 'Nederlands' },
    { code: 'pl', name: 'Polish', native: 'Polski' },
    { code: 'fa', name: 'Persian', native: 'فارسی', rtl: true },
    { code: 'ms', name: 'Malay', native: 'Bahasa Melayu' },
    { code: 'uk', name: 'Ukrainian', native: 'Українська' },
    { code: 'sw', name: 'Swahili', native: 'Kiswahili' },
    { code: 'he', name: 'Hebrew', native: 'עברית', rtl: true },
    { code: 'ps', name: 'Pashto', native: 'پښتو', rtl: true },
    { code: 'ks', name: 'Kashmiri', native: 'كٲشُر', rtl: true },
    { code: 'sd', name: 'Sindhi', native: 'سنڌي', rtl: true }
];

const TRANSLATIONS = {
    en: {
        appName: 'Hisab Banao',
        nav: {
            home: 'Home',
            about: 'About App',
            guide: 'User Guide'
        },
        heroTitle: 'Master Your Finances with Hisab Banao',
        heroSubtitle: 'The ultimate ledger app for Android. Secure, Fast, and Voice-Enabled.',
        downloadBtn: 'Download Hisab Banao',
        featuresTitle: 'Premium Features',
        installTitle: 'Installation Guide',
        steps: {
            download: 'Download the APK file from the link below.',
            install: 'Allow installation from unknown sources in settings.',
            setup: 'Login with Google for automatic cloud backup.'
        },
        contactTitle: 'Priority Support',
        contactDesc: 'Direct line to the developer. Get instant help via email.',
        nameLabel: 'Your Name',
        emailLabel: 'Your Email',
        messageLabel: 'Describe your issue',
        sendBtn: 'Send Message',
        footerText: '© 2024 Hisab Banao. All Rights Reserved.',
        aboutSection: {
            title: 'About Hisab Banao',
            subtitle: 'Your Digital Ledger Solution',
            developerTitle: 'Lead Developer & Creator',
            whoWeAreTitle: 'Who We Are',
            whoWeAreDesc: 'Hisab Banao is a passionate project developed to help small business owners, shopkeepers, and individuals manage their daily transactions efficiently. We understand that carrying a physical notebook is outdated and risky. Our mission is to provide a secure, digital alternative that lives right in your pocket.',
            transparencyTitle: 'Transparency & Security',
            transparencyDesc: 'We take your privacy seriously. Your financial data belongs to you. We do not sell your data. We only ask for permissions required for core features like Backup and Voice Input.',
            madeWith: 'Made with'
        },
        guideSection: {
            title: 'User Guide',
            step1: '1. Getting Started',
            loginOptions: 'Login: Google Login Required for Cloud Backup.',
            step2: '2. Dashboard Overview',
            step3: '3. Managing Customers',
            step4: '4. Adding Transactions',
            voiceInput: 'Tap the Mic icon and speak naturally, e.g., \'Ibrahim 500\' to add instantly.',
            step5: 'Reports & Sharing',
            step6: 'Settings & Security'
        },
        pwaInstallTitle: 'Install Hisab Banao',
        pwaInstallDesc: 'Add to home screen for quick access',
        pwaInstallBtn: 'Install',
        pwaUpdateTitle: 'Update Available!',
        pwaUpdateDesc: 'New version ready to install',
        pwaUpdateBtn: 'Update Now',
        offlineText: 'You are offline'
    },
    ur: {
        appName: 'حساب بناؤ',
        nav: {
            home: 'صفحہ اول',
            about: 'ایپ کے بارے میں',
            guide: 'صارف گائیڈ'
        },
        heroTitle: 'حساب بناؤ کے ساتھ اپنے مالی معاملات سنبھالیں',
        heroSubtitle: 'اینڈرائیڈ کے لیے حتمی لیجر ایپ۔ محفوظ، تیز، اور آواز سے چلنے والی۔',
        downloadBtn: 'حساب بناؤ ڈاؤن لوڈ کریں',
        featuresTitle: 'پریمیم فیچرز',
        installTitle: 'انسٹالیشن گائیڈ',
        steps: {
            download: 'نیچے دیے گئے لنک سے APK فائل ڈاؤن لوڈ کریں۔',
            install: 'سیٹنگز میں نامعلوم ذرائع سے انسٹالیشن کی اجازت دیں۔',
            setup: 'خودکار کلاؤڈ بیک اپ کے لیے Google سے لاگ ان کریں۔'
        },
        contactTitle: 'ترجیحی سپورٹ',
        contactDesc: 'ڈویلپر سے براہ راست رابطہ۔ ای میل کے ذریعے فوری مدد حاصل کریں۔',
        nameLabel: 'آپ کا نام',
        emailLabel: 'آپ کا ای میل',
        messageLabel: 'اپنا مسئلہ بیان کریں',
        sendBtn: 'پیغام بھیجیں',
        footerText: '© 2024 حساب بناؤ۔ جملہ حقوق محفوظ ہیں۔',
        aboutSection: {
            title: 'حساب بناؤ کے بارے میں',
            subtitle: 'آپ کا ڈیجیٹل لیجر حل',
            developerTitle: 'لیڈ ڈویلپر اور بانی',
            whoWeAreTitle: 'ہم کون ہیں',
            whoWeAreDesc: 'حساب بناؤ ایک پرجوش پروجیکٹ ہے جو چھوٹے کاروباری مالکان، دکانداروں اور افراد کو روزانہ کے لین دین کو مؤثر طریقے سے منظم کرنے میں مدد کرنے کے لیے بنایا گیا ہے۔ ہم سمجھتے ہیں کہ بہی کھاتہ رکھنا پرانا اور خطرناک ہے۔ ہمارا مشن ایک محفوظ، ڈیجیٹل متبادل فراہم کرنا ہے۔',
            transparencyTitle: 'شفافیت اور سیکیورٹی',
            transparencyDesc: 'ہم آپ کی رازداری کو سنجیدگی سے لیتے ہیں۔ آپ کا مالی ڈیٹا آپ کا ہے۔ ہم آپ کا ڈیٹا نہیں بیچتے۔ ہم صرف بیک اپ اور وائس ان پٹ جیسی بنیادی خصوصیات کے لیے درکار اجازتیں مانگتے ہیں۔',
            madeWith: 'بنایا گیا'
        },
        guideSection: {
            title: 'صارف گائیڈ',
            step1: '1. شروع کرنا',
            loginOptions: 'لاگ ان: کلاؤڈ بیک اپ کے لیے Google لاگ ان ضروری ہے۔',
            step2: '2. ڈیش بورڈ کا جائزہ',
            step3: '3. گاہکوں کا انتظام',
            step4: '4. لین دین شامل کرنا',
            voiceInput: 'مائیک آئیکن پر ٹیپ کریں اور قدرتی طور پر بولیں، مثلاً، \'ابراہیم 500\' فوری طور پر شامل کرنے کے لیے۔',
            step5: 'رپورٹس اور شیئرنگ',
            step6: 'سیٹنگز اور سیکیورٹی'
        }
    },
    ar: {
        appName: 'حساب بناؤ',
        nav: {
            home: 'الرئيسية',
            about: 'عن التطبيق',
            guide: 'دليل المستخدم'
        },
        heroTitle: 'أتقن أموالك مع حساب بناؤ',
        heroSubtitle: 'التطبيق النهائي لدفتر الأستاذ لنظام أندرويد. آمن وسريع ومفعّل بالصوت.',
        downloadBtn: 'تحميل حساب بناؤ',
        featuresTitle: 'ميزات متميزة',
        installTitle: 'دليل التثبيت',
        steps: {
            download: 'قم بتحميل ملف APK من الرابط أدناه.',
            install: 'اسمح بالتثبيت من مصادر غير معروفة في الإعدادات.',
            setup: 'سجّل الدخول باستخدام Google للنسخ الاحتياطي السحابي التلقائي.'
        },
        contactTitle: 'دعم ذو أولوية',
        contactDesc: 'خط مباشر للمطور. احصل على مساعدة فورية عبر البريد الإلكتروني.',
        nameLabel: 'اسمك',
        emailLabel: 'بريدك الإلكتروني',
        messageLabel: 'صف مشكلتك',
        sendBtn: 'إرسال الرسالة',
        footerText: '© 2024 حساب بناؤ. جميع الحقوق محفوظة.',
        aboutSection: {
            title: 'عن حساب بناؤ',
            subtitle: 'حلك الرقمي لدفتر الأستاذ',
            developerTitle: 'المطور الرئيسي والمؤسس',
            whoWeAreTitle: 'من نحن',
            whoWeAreDesc: 'حساب بناؤ هو مشروع شغوف تم تطويره لمساعدة أصحاب الأعمال الصغيرة وأصحاب المتاجر والأفراد على إدارة معاملاتهم اليومية بكفاءة. نحن نفهم أن حمل دفتر ملاحظات فعلي أمر عفا عليه الزمن ومحفوف بالمخاطر. مهمتنا هي توفير بديل رقمي آمن.',
            transparencyTitle: 'الشفافية والأمان',
            transparencyDesc: 'نحن نأخذ خصوصيتك على محمل الجد. بياناتك المالية ملك لك. نحن لا نبيع بياناتك. نطلب فقط الأذونات المطلوبة للميزات الأساسية مثل النسخ الاحتياطي والإدخال الصوتي.',
            madeWith: 'صنع بـ'
        },
        guideSection: {
            title: 'دليل المستخدم',
            step1: '1. البدء',
            loginOptions: 'تسجيل الدخول: تسجيل الدخول بـ Google مطلوب للنسخ الاحتياطي السحابي.',
            step2: '2. نظرة عامة على لوحة التحكم',
            step3: '3. إدارة العملاء',
            step4: '4. إضافة المعاملات',
            voiceInput: 'اضغط على أيقونة الميكروفون وتحدث بشكل طبيعي، مثل، \'إبراهيم 500\' للإضافة فورًا.',
            step5: 'التقارير والمشاركة',
            step6: 'الإعدادات والأمان'
        }
    },
    zh: {
        appName: 'Hisab Banao',
        nav: {
            home: '首页',
            about: '关于应用',
            guide: '用户指南'
        },
        heroTitle: '使用 Hisab Banao 掌控您的财务',
        heroSubtitle: 'Android 终极账本应用。安全、快速、支持语音输入。',
        downloadBtn: '下载 Hisab Banao',
        featuresTitle: '高级功能',
        installTitle: '安装指南',
        steps: {
            download: '从下面的链接下载 APK 文件。',
            install: '在设置中允许从未知来源安装。',
            setup: '使用 Google 登录以自动云备份。'
        },
        contactTitle: '优先支持',
        contactDesc: '直接联系开发者。通过电子邮件获取即时帮助。',
        nameLabel: '您的姓名',
        emailLabel: '您的电子邮件',
        messageLabel: '描述您的问题',
        sendBtn: '发送消息',
        footerText: '© 2024 Hisab Banao。保留所有权利。',
        aboutSection: {
            title: '关于 Hisab Banao',
            subtitle: '您的数字账本解决方案',
            developerTitle: '首席开发者和创始人',
            whoWeAreTitle: '我们是谁',
            whoWeAreDesc: 'Hisab Banao 是一个热情的项目，旨在帮助小企业主、店主和个人有效管理日常交易。我们理解携带实体笔记本已经过时且有风险。我们的使命是提供一个安全的数字替代方案。',
            transparencyTitle: '透明度和安全性',
            transparencyDesc: '我们非常重视您的隐私。您的财务数据属于您。我们不出售您的数据。我们只请求备份和语音输入等核心功能所需的权限。',
            madeWith: '用心制作'
        },
        guideSection: {
            title: '用户指南',
            step1: '1. 入门',
            loginOptions: '登录：Google 登录是云备份所必需的。',
            step2: '2. 仪表板概览',
            step3: '3. 管理客户',
            step4: '4. 添加交易',
            voiceInput: '点击麦克风图标并自然说话，例如，"伊布拉欣 500"即可立即添加。',
            step5: '报告和分享',
            step6: '设置和安全'
        }
    },
    es: {
        appName: 'Hisab Banao',
        nav: {
            home: 'Inicio',
            about: 'Acerca de',
            guide: 'Guía de Usuario'
        },
        heroTitle: 'Domina Tus Finanzas con Hisab Banao',
        heroSubtitle: 'La aplicación de libro mayor definitiva para Android. Segura, rápida y habilitada por voz.',
        downloadBtn: 'Descargar Hisab Banao',
        featuresTitle: 'Características Premium',
        installTitle: 'Guía de Instalación',
        steps: {
            download: 'Descarga el archivo APK desde el enlace abajo.',
            install: 'Permite la instalación desde fuentes desconocidas en la configuración.',
            setup: 'Inicia sesión con Google para copia de seguridad automática en la nube.'
        },
        contactTitle: 'Soporte Prioritario',
        contactDesc: 'Línea directa con el desarrollador. Obtén ayuda instantánea por correo electrónico.',
        nameLabel: 'Tu Nombre',
        emailLabel: 'Tu Correo Electrónico',
        messageLabel: 'Describe tu problema',
        sendBtn: 'Enviar Mensaje',
        footerText: '© 2024 Hisab Banao. Todos los Derechos Reservados.',
        aboutSection: {
            title: 'Acerca de Hisab Banao',
            subtitle: 'Tu Solución de Libro Mayor Digital',
            developerTitle: 'Desarrollador Principal y Creador',
            whoWeAreTitle: 'Quiénes Somos',
            whoWeAreDesc: 'Hisab Banao es un proyecto apasionado desarrollado para ayudar a pequeños empresarios, tenderos e individuos a gestionar sus transacciones diarias de manera eficiente. Entendemos que llevar un cuaderno físico es anticuado y arriesgado. Nuestra misión es proporcionar una alternativa digital y segura.',
            transparencyTitle: 'Transparencia y Seguridad',
            transparencyDesc: 'Tomamos tu privacidad en serio. Tus datos financieros te pertenecen. No vendemos tus datos. Solo pedimos permisos requeridos para funciones principales como Copia de Seguridad y Entrada de Voz.',
            madeWith: 'Hecho con'
        },
        guideSection: {
            title: 'Guía de Usuario',
            step1: '1. Comenzar',
            loginOptions: 'Inicio de Sesión: Google es requerido para copia de seguridad en la nube.',
            step2: '2. Resumen del Panel',
            step3: '3. Gestionar Clientes',
            step4: '4. Agregar Transacciones',
            voiceInput: 'Toca el ícono del micrófono y habla naturalmente, ej., \'Ibrahim 500\' para agregar instantáneamente.',
            step5: 'Informes y Compartir',
            step6: 'Configuración y Seguridad'
        }
    },
    fr: {
        appName: 'Hisab Banao',
        nav: {
            home: 'Accueil',
            about: 'À propos',
            guide: 'Guide Utilisateur'
        },
        heroTitle: 'Maîtrisez Vos Finances avec Hisab Banao',
        heroSubtitle: 'L\'application de grand livre ultime pour Android. Sécurisée, rapide et activée par la voix.',
        downloadBtn: 'Télécharger Hisab Banao',
        featuresTitle: 'Fonctionnalités Premium',
        installTitle: 'Guide d\'Installation',
        steps: {
            download: 'Téléchargez le fichier APK depuis le lien ci-dessous.',
            install: 'Autorisez l\'installation depuis des sources inconnues dans les paramètres.',
            setup: 'Connectez-vous avec Google pour une sauvegarde cloud automatique.'
        },
        contactTitle: 'Support Prioritaire',
        contactDesc: 'Ligne directe avec le développeur. Obtenez une aide instantanée par e-mail.',
        nameLabel: 'Votre Nom',
        emailLabel: 'Votre E-mail',
        messageLabel: 'Décrivez votre problème',
        sendBtn: 'Envoyer le Message',
        footerText: '© 2024 Hisab Banao. Tous Droits Réservés.',
        aboutSection: {
            title: 'À propos de Hisab Banao',
            subtitle: 'Numérisation du Système de Grand Livre Indien',
            developerTitle: 'Développeur Principal et Créateur',
            whoWeAreTitle: 'Qui Nous Sommes',
            whoWeAreDesc: 'Hisab Banao est un projet passionné développé pour aider les petits entrepreneurs, commerçants et particuliers à gérer efficacement leurs transactions quotidiennes. Nous comprenons que porter un carnet physique est obsolète et risqué. Notre mission est de fournir une alternative numérique sécurisée.',
            transparencyTitle: 'Transparence et Sécurité',
            transparencyDesc: 'Nous prenons votre vie privée au sérieux. Vos données financières vous appartiennent. Nous ne vendons pas vos données. Nous ne demandons que les autorisations nécessaires pour les fonctionnalités principales comme la Sauvegarde et la Saisie Vocale.',
            madeWith: 'Fait avec'
        },
        guideSection: {
            title: 'Guide Utilisateur',
            step1: '1. Commencer',
            loginOptions: 'Connexion: Google est requis pour la sauvegarde cloud.',
            step2: '2. Aperçu du Tableau de Bord',
            step3: '3. Gérer les Clients',
            step4: '4. Ajouter des Transactions',
            voiceInput: 'Appuyez sur l\'icône du micro et parlez naturellement, par ex., \'Ibrahim 500\' pour ajouter instantanément.',
            step5: 'Rapports et Partage',
            step6: 'Paramètres et Sécurité'
        }
    },
    ru: {
        appName: 'Hisab Banao',
        nav: {
            home: 'Главная',
            about: 'О приложении',
            guide: 'Руководство'
        },
        heroTitle: 'Управляйте Финансами с Hisab Banao',
        heroSubtitle: 'Лучшее приложение для ведения учёта на Android. Безопасное, быстрое, с голосовым вводом.',
        downloadBtn: 'Скачать Hisab Banao',
        featuresTitle: 'Премиум Функции',
        installTitle: 'Руководство по Установке',
        steps: {
            download: 'Скачайте APK файл по ссылке ниже.',
            install: 'Разрешите установку из неизвестных источников в настройках.',
            setup: 'Войдите через Google для автоматического облачного резервного копирования.'
        },
        contactTitle: 'Приоритетная Поддержка',
        contactDesc: 'Прямая связь с разработчиком. Получите мгновенную помощь по электронной почте.',
        nameLabel: 'Ваше Имя',
        emailLabel: 'Ваш Email',
        messageLabel: 'Опишите вашу проблему',
        sendBtn: 'Отправить Сообщение',
        footerText: '© 2024 Hisab Banao. Все права защищены.',
        aboutSection: {
            title: 'О Hisab Banao',
            subtitle: 'Цифровизация Индийской Системы Учёта',
            developerTitle: 'Ведущий Разработчик и Создатель',
            whoWeAreTitle: 'Кто Мы',
            whoWeAreDesc: 'Hisab Banao — это увлечённый проект, разработанный для помощи малому бизнесу, владельцам магазинов и частным лицам в эффективном управлении ежедневными транзакциями. Мы понимаем, что носить физический блокнот устарело и рискованно. Наша миссия — предоставить безопасную цифровую альтернативу.',
            transparencyTitle: 'Прозрачность и Безопасность',
            transparencyDesc: 'Мы серьёзно относимся к вашей конфиденциальности. Ваши финансовые данные принадлежат вам. Мы не продаём ваши данные. Мы запрашиваем только разрешения, необходимые для основных функций, таких как резервное копирование и голосовой ввод.',
            madeWith: 'Сделано с'
        },
        guideSection: {
            title: 'Руководство Пользователя',
            step1: '1. Начало Работы',
            loginOptions: 'Варианты входа: Google (Рекомендуется) или Гостевой режим.',
            step2: '2. Обзор Панели Управления',
            step3: '3. Управление Клиентами',
            step4: '4. Добавление Транзакций',
            voiceInput: 'Нажмите на иконку микрофона и говорите естественно, напр., \'Амит 500\' для мгновенного добавления.',
            step5: 'Отчёты и Обмен',
            step6: 'Настройки и Безопасность'
        }
    },
    pt: {
        appName: 'Hisab Banao',
        nav: {
            home: 'Início',
            about: 'Sobre',
            guide: 'Guia do Usuário'
        },
        heroTitle: 'Domine Suas Finanças com Hisab Banao',
        heroSubtitle: 'O aplicativo de livro-razão definitivo para Android. Seguro, rápido e habilitado por voz.',
        downloadBtn: 'Baixar Hisab Banao',
        featuresTitle: 'Recursos Premium',
        installTitle: 'Guia de Instalação',
        steps: {
            download: 'Baixe o arquivo APK do link abaixo.',
            install: 'Permita a instalação de fontes desconhecidas nas configurações.',
            setup: 'Faça login com o Google para backup automático na nuvem.'
        },
        contactTitle: 'Suporte Prioritário',
        contactDesc: 'Linha direta com o desenvolvedor. Obtenha ajuda instantânea por e-mail.',
        nameLabel: 'Seu Nome',
        emailLabel: 'Seu E-mail',
        messageLabel: 'Descreva seu problema',
        sendBtn: 'Enviar Mensagem',
        footerText: '© 2024 Hisab Banao. Todos os Direitos Reservados.',
        aboutSection: {
            title: 'Sobre o Hisab Banao',
            subtitle: 'Digitalizando o Sistema de Livro-Razão da Índia',
            developerTitle: 'Desenvolvedor Principal e Criador',
            whoWeAreTitle: 'Quem Somos',
            whoWeAreDesc: 'Hisab Banao é um projeto apaixonado desenvolvido para ajudar pequenos empresários, lojistas e indivíduos a gerenciar suas transações diárias de forma eficiente. Entendemos que carregar um caderno físico é ultrapassado e arriscado. Nossa missão é fornecer uma alternativa digital segura.',
            transparencyTitle: 'Transparência e Segurança',
            transparencyDesc: 'Levamos sua privacidade a sério. Seus dados financeiros pertencem a você. Não vendemos seus dados. Pedimos apenas permissões necessárias para recursos principais como Backup e Entrada de Voz.',
            madeWith: 'Feito com'
        },
        guideSection: {
            title: 'Guia do Usuário',
            step1: '1. Começando',
            loginOptions: 'Login: Google é necessário para backup na nuvem.',
            step2: '2. Visão Geral do Painel',
            step3: '3. Gerenciar Clientes',
            step4: '4. Adicionar Transações',
            voiceInput: 'Toque no ícone do microfone e fale naturalmente, ex., \'Ibrahim 500\' para adicionar instantaneamente.',
            step5: 'Relatórios e Compartilhamento',
            step6: 'Configurações e Segurança'
        }
    },
    de: {
        appName: 'Hisab Banao',
        nav: {
            home: 'Startseite',
            about: 'Über die App',
            guide: 'Benutzerhandbuch'
        },
        heroTitle: 'Meistern Sie Ihre Finanzen mit Hisab Banao',
        heroSubtitle: 'Die ultimative Hauptbuch-App für Android. Sicher, schnell und sprachgesteuert.',
        downloadBtn: 'Hisab Banao Herunterladen',
        featuresTitle: 'Premium-Funktionen',
        installTitle: 'Installationsanleitung',
        steps: {
            download: 'Laden Sie die APK-Datei über den Link unten herunter.',
            install: 'Erlauben Sie die Installation aus unbekannten Quellen in den Einstellungen.',
            setup: 'Melden Sie sich mit Google für automatisches Cloud-Backup an.'
        },
        contactTitle: 'Prioritäts-Support',
        contactDesc: 'Direkter Draht zum Entwickler. Erhalten Sie sofortige Hilfe per E-Mail.',
        nameLabel: 'Ihr Name',
        emailLabel: 'Ihre E-Mail',
        messageLabel: 'Beschreiben Sie Ihr Problem',
        sendBtn: 'Nachricht Senden',
        footerText: '© 2024 Hisab Banao. Alle Rechte vorbehalten.',
        aboutSection: {
            title: 'Über Hisab Banao',
            subtitle: 'Digitalisierung des indischen Hauptbuchsystems',
            developerTitle: 'Lead-Entwickler und Gründer',
            whoWeAreTitle: 'Wer Wir Sind',
            whoWeAreDesc: 'Hisab Banao ist ein leidenschaftliches Projekt, das entwickelt wurde, um kleinen Geschäftsinhabern, Ladenbesitzern und Einzelpersonen zu helfen, ihre täglichen Transaktionen effizient zu verwalten. Wir verstehen, dass das Mitführen eines physischen Notizbuchs veraltet und riskant ist. Unsere Mission ist es, eine sichere, digitale Alternative anzubieten.',
            transparencyTitle: 'Transparenz und Sicherheit',
            transparencyDesc: 'Wir nehmen Ihre Privatsphäre ernst. Ihre Finanzdaten gehören Ihnen. Wir verkaufen Ihre Daten nicht. Wir bitten nur um Berechtigungen, die für Kernfunktionen wie Backup und Spracheingabe erforderlich sind.',
            madeWith: 'Gemacht mit'
        },
        guideSection: {
            title: 'Benutzerhandbuch',
            step1: '1. Erste Schritte',
            loginOptions: 'Anmeldung: Google-Anmeldung ist für Cloud-Backup erforderlich.',
            step2: '2. Dashboard-Übersicht',
            step3: '3. Kunden Verwalten',
            step4: '4. Transaktionen Hinzufügen',
            voiceInput: 'Tippen Sie auf das Mikrofon-Symbol und sprechen Sie natürlich, z.B. \'Ibrahim 500\' zum sofortigen Hinzufügen.',
            step5: 'Berichte und Teilen',
            step6: 'Einstellungen und Sicherheit'
        }
    },
    ja: {
        appName: 'Hisab Banao',
        nav: {
            home: 'ホーム',
            about: 'アプリについて',
            guide: 'ユーザーガイド'
        },
        heroTitle: 'Hisab Banaoで財務を管理しよう',
        heroSubtitle: 'Android用の究極の台帳アプリ。安全、高速、音声対応。',
        downloadBtn: 'Hisab Banaoをダウンロード',
        featuresTitle: 'プレミアム機能',
        installTitle: 'インストールガイド',
        steps: {
            download: '下のリンクからAPKファイルをダウンロードしてください。',
            install: '設定で不明なソースからのインストールを許可してください。',
            setup: '自動クラウドバックアップのためにGoogleでログインしてください。'
        },
        contactTitle: '優先サポート',
        contactDesc: '開発者への直通ライン。メールで即座にサポートを受けられます。',
        nameLabel: 'お名前',
        emailLabel: 'メールアドレス',
        messageLabel: '問題を説明してください',
        sendBtn: 'メッセージを送信',
        footerText: '© 2024 Hisab Banao. 全著作権所有。',
        aboutSection: {
            title: 'Hisab Banaoについて',
            subtitle: 'インドの台帳システムをデジタル化',
            developerTitle: 'リード開発者兼クリエイター',
            whoWeAreTitle: '私たちについて',
            whoWeAreDesc: 'Hisab Banaoは、中小企業のオーナー、店主、個人が日々の取引を効率的に管理できるように開発された情熱的なプロジェクトです。物理的なノートを持ち歩くのは時代遅れでリスクがあることを理解しています。私たちの使命は、安全でデジタルな代替手段を提供することです。',
            transparencyTitle: '透明性とセキュリティ',
            transparencyDesc: 'あなたのプライバシーを真剣に受け止めています。あなたの財務データはあなたのものです。私たちはあなたのデータを販売しません。バックアップや音声入力などのコア機能に必要な権限のみを要求します。',
            madeWith: '愛情を込めて作成'
        },
        guideSection: {
            title: 'ユーザーガイド',
            step1: '1. はじめに',
            loginOptions: 'ログイン：クラウドバックアップにはGoogleログインが必要です。',
            step2: '2. ダッシュボード概要',
            step3: '3. 顧客の管理',
            step4: '4. 取引の追加',
            voiceInput: 'マイクアイコンをタップして自然に話しかけてください。例：「イブラヒム 500」で即座に追加。',
            step5: 'レポートと共有',
            step6: '設定とセキュリティ'
        }
    },
    id: {
        appName: 'Hisab Banao',
        nav: {
            home: 'Beranda',
            about: 'Tentang Aplikasi',
            guide: 'Panduan Pengguna'
        },
        heroTitle: 'Kuasai Keuangan Anda dengan Hisab Banao',
        heroSubtitle: 'Aplikasi buku besar terbaik untuk Android. Aman, Cepat, dan Mendukung Suara.',
        downloadBtn: 'Unduh Hisab Banao',
        featuresTitle: 'Fitur Premium',
        installTitle: 'Panduan Instalasi',
        steps: {
            download: 'Unduh file APK dari tautan di bawah.',
            install: 'Izinkan instalasi dari sumber tidak dikenal di pengaturan.',
            setup: 'Masuk dengan Google untuk pencadangan cloud otomatis.'
        },
        contactTitle: 'Dukungan Prioritas',
        contactDesc: 'Jalur langsung ke pengembang. Dapatkan bantuan instan melalui email.',
        nameLabel: 'Nama Anda',
        emailLabel: 'Email Anda',
        messageLabel: 'Jelaskan masalah Anda',
        sendBtn: 'Kirim Pesan',
        footerText: '© 2024 Hisab Banao. Hak Cipta Dilindungi.',
        aboutSection: {
            title: 'Tentang Hisab Banao',
            subtitle: 'Solusi Buku Besar Digital Anda',
            developerTitle: 'Pengembang Utama dan Pencipta',
            whoWeAreTitle: 'Siapa Kami',
            whoWeAreDesc: 'Hisab Banao adalah proyek yang dikembangkan dengan penuh semangat untuk membantu pemilik usaha kecil, pemilik toko, dan individu mengelola transaksi harian mereka secara efisien. Kami memahami bahwa membawa buku catatan fisik sudah ketinggalan zaman dan berisiko. Misi kami adalah menyediakan alternatif digital yang aman.',
            transparencyTitle: 'Transparansi dan Keamanan',
            transparencyDesc: 'Kami menganggap serius privasi Anda. Data keuangan Anda adalah milik Anda. Kami tidak menjual data Anda. Kami hanya meminta izin yang diperlukan untuk fitur inti seperti Pencadangan dan Input Suara.',
            madeWith: 'Dibuat dengan'
        },
        guideSection: {
            title: 'Panduan Pengguna',
            step1: '1. Memulai',
            loginOptions: 'Login: Google Login diperlukan untuk backup cloud.',
            step2: '2. Ikhtisar Dashboard',
            step3: '3. Mengelola Pelanggan',
            step4: '4. Menambahkan Transaksi',
            voiceInput: 'Ketuk ikon Mic dan bicara secara alami, misalnya, \'Ibrahim 500\' untuk menambahkan secara instan.',
            step5: 'Laporan dan Berbagi',
            step6: 'Pengaturan dan Keamanan'
        }
    },
    tr: {
        appName: 'Hisab Banao',
        nav: {
            home: 'Ana Sayfa',
            about: 'Uygulama Hakkında',
            guide: 'Kullanıcı Rehberi'
        },
        heroTitle: 'Hisab Banao ile Finanslarınızı Yönetin',
        heroSubtitle: 'Android için en iyi defter uygulaması. Güvenli, Hızlı ve Sesle Etkinleştirilmiş.',
        downloadBtn: 'Hisab Banao\'yu İndir',
        featuresTitle: 'Premium Özellikler',
        installTitle: 'Kurulum Rehberi',
        steps: {
            download: 'Aşağıdaki bağlantıdan APK dosyasını indirin.',
            install: 'Ayarlarda bilinmeyen kaynaklardan kuruluma izin verin.',
            setup: 'Otomatik bulut yedeklemesi için Google ile giriş yapın.'
        },
        contactTitle: 'Öncelikli Destek',
        contactDesc: 'Geliştiriciye doğrudan bağlantı. E-posta yoluyla anında yardım alın.',
        nameLabel: 'Adınız',
        emailLabel: 'E-postanız',
        messageLabel: 'Sorununuzu açıklayın',
        sendBtn: 'Mesaj Gönder',
        footerText: '© 2024 Hisab Banao. Tüm Hakları Saklıdır.',
        aboutSection: {
            title: 'Hisab Banao Hakkında',
            subtitle: 'Dijital Defter Çözümünüz',
            developerTitle: 'Baş Geliştirici ve Yaratıcı',
            whoWeAreTitle: 'Biz Kimiz',
            whoWeAreDesc: 'Hisab Banao, küçük işletme sahiplerinin, esnafın ve bireylerin günlük işlemlerini verimli bir şekilde yönetmelerine yardımcı olmak için geliştirilen tutkulu bir projedir. Fiziksel bir defter taşımanın modası geçmiş ve riskli olduğunu anlıyoruz. Misyonumuz güvenli, dijital bir alternatif sunmaktır.',
            transparencyTitle: 'Şeffaflık ve Güvenlik',
            transparencyDesc: 'Gizliliğinizi ciddiye alıyoruz. Mali verileriniz size aittir. Verilerinizi satmıyoruz. Sadece Yedekleme ve Sesli Giriş gibi temel özellikler için gerekli izinleri istiyoruz.',
            madeWith: 'Sevgiyle yapıldı'
        },
        guideSection: {
            title: 'Kullanıcı Rehberi',
            step1: '1. Başlarken',
            loginOptions: 'Giriş: Bulut yedekleme için Google Girişi gereklidir.',
            step2: '2. Kontrol Paneli Genel Bakış',
            step3: '3. Müşterileri Yönetme',
            step4: '4. İşlem Ekleme',
            voiceInput: 'Mikrofon simgesine dokunun ve doğal konuşun, örn., \'Ibrahim 500\' anında eklemek için.',
            step5: 'Raporlar ve Paylaşım',
            step6: 'Ayarlar ve Güvenlik'
        }
    },
    bn: {
        appName: 'হিসাব বানাও',
        nav: {
            home: 'হোম',
            about: 'অ্যাপ সম্পর্কে',
            guide: 'ব্যবহারকারী গাইড'
        },
        heroTitle: 'হিসাব বানাওর সাথে আপনার অর্থ পরিচালনা করুন',
        heroSubtitle: 'অ্যান্ড্রয়েডের জন্য চূড়ান্ত লেজার অ্যাপ। নিরাপদ, দ্রুত এবং ভয়েস-সক্ষম।',
        downloadBtn: 'হিসাব বানাও ডাউনলোড করুন',
        featuresTitle: 'প্রিমিয়াম বৈশিষ্ট্য',
        installTitle: 'ইনস্টলেশন গাইড',
        steps: {
            download: 'নীচের লিঙ্ক থেকে APK ফাইল ডাউনলোড করুন।',
            install: 'সেটিংসে অজানা উৎস থেকে ইনস্টলেশনের অনুমতি দিন।',
            setup: 'স্বয়ংক্রিয় ক্লাউড ব্যাকআপের জন্য Google দিয়ে লগইন করুন।'
        },
        contactTitle: 'অগ্রাধিকার সহায়তা',
        contactDesc: 'ডেভেলপারের সাথে সরাসরি যোগাযোগ। ইমেলের মাধ্যমে তাৎক্ষণিক সাহায্য পান।',
        nameLabel: 'আপনার নাম',
        emailLabel: 'আপনার ইমেল',
        messageLabel: 'আপনার সমস্যা বর্ণনা করুন',
        sendBtn: 'বার্তা পাঠান',
        footerText: '© ২০২৪ হিসাব বানাও। সমস্ত অধিকার সংরক্ষিত।',
        aboutSection: {
            title: 'হিসাব বানাও সম্পর্কে',
            subtitle: 'ভারতের লেজার সিস্টেম ডিজিটালাইজ করা',
            developerTitle: 'লিড ডেভেলপার এবং স্রষ্টা',
            whoWeAreTitle: 'আমরা কে',
            whoWeAreDesc: 'হিসাব বানাও একটি আবেগপূর্ণ প্রকল্প যা ছোট ব্যবসার মালিক, দোকানদার এবং ব্যক্তিদের দৈনিক লেনদেন দক্ষতার সাথে পরিচালনা করতে সাহায্য করার জন্য তৈরি করা হয়েছে। আমরা বুঝি যে শারীরিক নোটবুক বহন করা পুরানো এবং ঝুঁকিপূর্ণ। আমাদের মিশন হল একটি নিরাপদ, ডিজিটাল বিকল্প প্রদান করা।',
            transparencyTitle: 'স্বচ্ছতা এবং নিরাপত্তা',
            transparencyDesc: 'আমরা আপনার গোপনীয়তাকে গুরুত্বের সাথে নিই। আপনার আর্থিক ডেটা আপনার। আমরা আপনার ডেটা বিক্রি করি না। আমরা শুধুমাত্র ব্যাকআপ এবং ভয়েস ইনপুটের মতো মূল বৈশিষ্ট্যগুলির জন্য প্রয়োজনীয় অনুমতি চাই।',
            madeWith: 'ভালোবাসায় তৈরি'
        },
        guideSection: {
            title: 'ব্যবহারকারী গাইড',
            step1: '১. শুরু করা',
            loginOptions: 'লগইন অপশন: গুগল লগইন (প্রস্তাবিত) বা গেস্ট মোড।',
            step2: '২. ড্যাশবোর্ড ওভারভিউ',
            step3: '৩. গ্রাহক পরিচালনা',
            step4: '৪. লেনদেন যোগ করা',
            voiceInput: 'মাইক আইকনে ট্যাপ করুন এবং স্বাভাবিকভাবে কথা বলুন, যেমন, \'অমিত ৫০০\' তাৎক্ষণিক যোগ করতে।',
            step5: 'রিপোর্ট এবং শেয়ারিং',
            step6: 'সেটিংস এবং নিরাপত্তা'
        }
    },
    pa: {
        appName: 'ਹਿਸਾਬ ਬਣਾਓ',
        nav: {
            home: 'ਹੋਮ',
            about: 'ਐਪ ਬਾਰੇ',
            guide: 'ਯੂਜ਼ਰ ਗਾਈਡ'
        },
        heroTitle: 'ਹਿਸਾਬ ਬਣਾਓ ਨਾਲ ਆਪਣੇ ਵਿੱਤ ਦਾ ਪ੍ਰਬੰਧ ਕਰੋ',
        heroSubtitle: 'ਐਂਡਰਾਇਡ ਲਈ ਸਭ ਤੋਂ ਵਧੀਆ ਲੇਜ਼ਰ ਐਪ। ਸੁਰੱਖਿਅਤ, ਤੇਜ਼, ਅਤੇ ਆਵਾਜ਼-ਸਮਰੱਥ।',
        downloadBtn: 'ਹਿਸਾਬ ਬਣਾਓ ਡਾਊਨਲੋਡ ਕਰੋ',
        featuresTitle: 'ਪ੍ਰੀਮੀਅਮ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ',
        installTitle: 'ਇੰਸਟਾਲੇਸ਼ਨ ਗਾਈਡ',
        steps: {
            download: 'ਹੇਠਾਂ ਦਿੱਤੇ ਲਿੰਕ ਤੋਂ APK ਫਾਈਲ ਡਾਊਨਲੋਡ ਕਰੋ।',
            install: 'ਸੈਟਿੰਗਾਂ ਵਿੱਚ ਅਣਜਾਣ ਸਰੋਤਾਂ ਤੋਂ ਇੰਸਟਾਲੇਸ਼ਨ ਦੀ ਆਗਿਆ ਦਿਓ।',
            setup: 'ਆਟੋਮੈਟਿਕ ਕਲਾਊਡ ਬੈਕਅੱਪ ਲਈ Google ਨਾਲ ਲੌਗਇਨ ਕਰੋ।'
        },
        contactTitle: 'ਤਰਜੀਹੀ ਸਹਾਇਤਾ',
        contactDesc: 'ਡਿਵੈਲਪਰ ਨਾਲ ਸਿੱਧਾ ਸੰਪਰਕ। ਈਮੇਲ ਰਾਹੀਂ ਤੁਰੰਤ ਮਦਦ ਪ੍ਰਾਪਤ ਕਰੋ।',
        nameLabel: 'ਤੁਹਾਡਾ ਨਾਮ',
        emailLabel: 'ਤੁਹਾਡੀ ਈਮੇਲ',
        messageLabel: 'ਆਪਣੀ ਸਮੱਸਿਆ ਦੱਸੋ',
        sendBtn: 'ਸੁਨੇਹਾ ਭੇਜੋ',
        footerText: '© 2024 ਹਿਸਾਬ ਬਣਾਓ। ਸਾਰੇ ਹੱਕ ਰਾਖਵੇਂ ਹਨ।',
        aboutSection: {
            title: 'ਹਿਸਾਬ ਬਣਾਓ ਬਾਰੇ',
            subtitle: 'ਭਾਰਤ ਦੀ ਲੇਜ਼ਰ ਪ੍ਰਣਾਲੀ ਨੂੰ ਡਿਜੀਟਲ ਬਣਾਉਣਾ',
            developerTitle: 'ਲੀਡ ਡਿਵੈਲਪਰ ਅਤੇ ਸਿਰਜਣਹਾਰ',
            whoWeAreTitle: 'ਅਸੀਂ ਕੌਣ ਹਾਂ',
            whoWeAreDesc: 'ਹਿਸਾਬ ਬਣਾਓ ਇੱਕ ਜੋਸ਼ੀਲਾ ਪ੍ਰੋਜੈਕਟ ਹੈ ਜੋ ਛੋਟੇ ਕਾਰੋਬਾਰੀ ਮਾਲਕਾਂ, ਦੁਕਾਨਦਾਰਾਂ ਅਤੇ ਵਿਅਕਤੀਆਂ ਨੂੰ ਰੋਜ਼ਾਨਾ ਲੈਣ-ਦੇਣ ਨੂੰ ਕੁਸ਼ਲਤਾ ਨਾਲ ਪ੍ਰਬੰਧਿਤ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਨ ਲਈ ਵਿਕਸਤ ਕੀਤਾ ਗਿਆ ਹੈ।',
            transparencyTitle: 'ਪਾਰਦਰਸ਼ਤਾ ਅਤੇ ਸੁਰੱਖਿਆ',
            transparencyDesc: 'ਅਸੀਂ ਤੁਹਾਡੀ ਗੋਪਨੀਯਤਾ ਨੂੰ ਗੰਭੀਰਤਾ ਨਾਲ ਲੈਂਦੇ ਹਾਂ। ਤੁਹਾਡਾ ਵਿੱਤੀ ਡੇਟਾ ਤੁਹਾਡਾ ਹੈ।',
            madeWith: 'ਪਿਆਰ ਨਾਲ ਬਣਾਇਆ'
        },
        guideSection: {
            title: 'ਯੂਜ਼ਰ ਗਾਈਡ',
            step1: '1. ਸ਼ੁਰੂ ਕਰਨਾ',
            loginOptions: 'ਲੌਗਇਨ ਵਿਕਲਪ: Google ਲੌਗਇਨ (ਸਿਫਾਰਸ਼ੀ) ਜਾਂ ਗੈਸਟ ਮੋਡ।',
            step2: '2. ਡੈਸ਼ਬੋਰਡ ਸੰਖੇਪ',
            step3: '3. ਗਾਹਕਾਂ ਦਾ ਪ੍ਰਬੰਧਨ',
            step4: '4. ਲੈਣ-ਦੇਣ ਜੋੜਨਾ',
            voiceInput: 'ਮਾਈਕ ਆਈਕਨ \'ਤੇ ਟੈਪ ਕਰੋ ਅਤੇ ਕੁਦਰਤੀ ਤੌਰ \'ਤੇ ਬੋਲੋ।',
            step5: 'ਰਿਪੋਰਟਾਂ ਅਤੇ ਸ਼ੇਅਰਿੰਗ',
            step6: 'ਸੈਟਿੰਗਾਂ ਅਤੇ ਸੁਰੱਖਿਆ'
        }
    },
    it: {
        appName: 'Hisab Banao',
        nav: {
            home: 'Home',
            about: 'Info App',
            guide: 'Guida Utente'
        },
        heroTitle: 'Gestisci le Tue Finanze con Hisab Banao',
        heroSubtitle: 'L\'app di contabilità definitiva per Android. Sicura, Veloce e Abilitata alla Voce.',
        downloadBtn: 'Scarica Hisab Banao',
        featuresTitle: 'Funzionalità Premium',
        installTitle: 'Guida all\'Installazione',
        steps: {
            download: 'Scarica il file APK dal link qui sotto.',
            install: 'Consenti l\'installazione da fonti sconosciute nelle impostazioni.',
            setup: 'Accedi con Google per il backup cloud automatico.'
        },
        contactTitle: 'Supporto Prioritario',
        contactDesc: 'Linea diretta con lo sviluppatore. Ottieni aiuto istantaneo via email.',
        nameLabel: 'Il Tuo Nome',
        emailLabel: 'La Tua Email',
        messageLabel: 'Descrivi il tuo problema',
        sendBtn: 'Invia Messaggio',
        footerText: '© 2024 Hisab Banao. Tutti i Diritti Riservati.',
        aboutSection: {
            title: 'Informazioni su Hisab Banao',
            subtitle: 'La Tua Soluzione Contabile Digitale',
            developerTitle: 'Sviluppatore Principale e Creatore',
            whoWeAreTitle: 'Chi Siamo',
            whoWeAreDesc: 'Hisab Banao è un progetto appassionato sviluppato per aiutare piccoli imprenditori, negozianti e privati a gestire le transazioni quotidiane in modo efficiente.',
            transparencyTitle: 'Trasparenza e Sicurezza',
            transparencyDesc: 'Prendiamo sul serio la tua privacy. I tuoi dati finanziari appartengono a te. Non vendiamo i tuoi dati.',
            madeWith: 'Fatto con'
        },
        guideSection: {
            title: 'Guida Utente',
            step1: '1. Per Iniziare',
            loginOptions: 'Opzioni di Login: Google (Consigliato) o Modalità Ospite.',
            step2: '2. Panoramica Dashboard',
            step3: '3. Gestire i Clienti',
            step4: '4. Aggiungere Transazioni',
            voiceInput: 'Tocca l\'icona del microfono e parla naturalmente.',
            step5: 'Report e Condivisione',
            step6: 'Impostazioni e Sicurezza'
        }
    },
    ko: {
        appName: 'Hisab Banao',
        nav: {
            home: '홈',
            about: '앱 정보',
            guide: '사용자 가이드'
        },
        heroTitle: 'Hisab Banao로 재정을 관리하세요',
        heroSubtitle: '안드로이드용 최고의 장부 앱. 안전하고, 빠르고, 음성 지원.',
        downloadBtn: 'Hisab Banao 다운로드',
        featuresTitle: '프리미엄 기능',
        installTitle: '설치 가이드',
        steps: {
            download: '아래 링크에서 APK 파일을 다운로드하세요.',
            install: '설정에서 알 수 없는 소스에서 설치를 허용하세요.',
            setup: '자동 클라우드 백업을 위해 Google로 로그인하세요.'
        },
        contactTitle: '우선 지원',
        contactDesc: '개발자에게 직접 연결. 이메일로 즉각적인 도움을 받으세요.',
        nameLabel: '이름',
        emailLabel: '이메일',
        messageLabel: '문제를 설명하세요',
        sendBtn: '메시지 보내기',
        footerText: '© 2024 Hisab Banao. 모든 권리 보유.',
        aboutSection: {
            title: 'Hisab Banao 소개',
            subtitle: '인도의 장부 시스템 디지털화',
            developerTitle: '수석 개발자 및 창시자',
            whoWeAreTitle: '우리는 누구인가',
            whoWeAreDesc: 'Hisab Banao는 소규모 사업주, 상점 주인 및 개인이 일상적인 거래를 효율적으로 관리할 수 있도록 돕기 위해 개발된 열정적인 프로젝트입니다.',
            transparencyTitle: '투명성 및 보안',
            transparencyDesc: '우리는 귀하의 개인 정보를 진지하게 생각합니다. 귀하의 금융 데이터는 귀하의 것입니다.',
            madeWith: '사랑으로 만듦'
        },
        guideSection: {
            title: '사용자 가이드',
            step1: '1. 시작하기',
            loginOptions: '로그인 옵션: Google 로그인(권장) 또는 게스트 모드.',
            step2: '2. 대시보드 개요',
            step3: '3. 고객 관리',
            step4: '4. 거래 추가',
            voiceInput: '마이크 아이콘을 탭하고 자연스럽게 말하세요.',
            step5: '보고서 및 공유',
            step6: '설정 및 보안'
        }
    },
    vi: {
        appName: 'Hisab Banao',
        nav: {
            home: 'Trang Chủ',
            about: 'Giới Thiệu',
            guide: 'Hướng Dẫn'
        },
        heroTitle: 'Quản Lý Tài Chính với Hisab Banao',
        heroSubtitle: 'Ứng dụng sổ cái tối ưu cho Android. An toàn, Nhanh chóng và Hỗ trợ Giọng nói.',
        downloadBtn: 'Tải Hisab Banao',
        featuresTitle: 'Tính Năng Cao Cấp',
        installTitle: 'Hướng Dẫn Cài Đặt',
        steps: {
            download: 'Tải file APK từ liên kết bên dưới.',
            install: 'Cho phép cài đặt từ nguồn không xác định trong cài đặt.',
            setup: 'Đăng nhập bằng Google để sao lưu đám mây tự động.'
        },
        contactTitle: 'Hỗ Trợ Ưu Tiên',
        contactDesc: 'Liên hệ trực tiếp với nhà phát triển. Nhận trợ giúp ngay qua email.',
        nameLabel: 'Tên Của Bạn',
        emailLabel: 'Email Của Bạn',
        messageLabel: 'Mô tả vấn đề của bạn',
        sendBtn: 'Gửi Tin Nhắn',
        footerText: '© 2024 Hisab Banao. Đã Đăng Ký Bản Quyền.',
        aboutSection: {
            title: 'Về Hisab Banao',
            subtitle: 'Số Hóa Hệ Thống Sổ Cái Ấn Độ',
            developerTitle: 'Nhà Phát Triển Chính và Người Sáng Tạo',
            whoWeAreTitle: 'Chúng Tôi Là Ai',
            whoWeAreDesc: 'Hisab Banao là một dự án đam mê được phát triển để giúp chủ doanh nghiệp nhỏ, chủ cửa hàng và cá nhân quản lý giao dịch hàng ngày một cách hiệu quả.',
            transparencyTitle: 'Minh Bạch và Bảo Mật',
            transparencyDesc: 'Chúng tôi coi trọng quyền riêng tư của bạn. Dữ liệu tài chính của bạn thuộc về bạn.',
            madeWith: 'Được làm với'
        },
        guideSection: {
            title: 'Hướng Dẫn Sử Dụng',
            step1: '1. Bắt Đầu',
            loginOptions: 'Tùy chọn Đăng nhập: Google (Khuyến nghị) hoặc Chế độ Khách.',
            step2: '2. Tổng Quan Bảng Điều Khiển',
            step3: '3. Quản Lý Khách Hàng',
            step4: '4. Thêm Giao Dịch',
            voiceInput: 'Chạm vào biểu tượng Mic và nói tự nhiên.',
            step5: 'Báo Cáo và Chia Sẻ',
            step6: 'Cài Đặt và Bảo Mật'
        }
    },
    th: {
        appName: 'Hisab Banao',
        nav: {
            home: 'หน้าแรก',
            about: 'เกี่ยวกับแอป',
            guide: 'คู่มือผู้ใช้'
        },
        heroTitle: 'จัดการการเงินของคุณด้วย Hisab Banao',
        heroSubtitle: 'แอปบัญชีแยกประเภทที่ดีที่สุดสำหรับ Android ปลอดภัย รวดเร็ว และรองรับเสียง',
        downloadBtn: 'ดาวน์โหลด Hisab Banao',
        featuresTitle: 'คุณสมบัติพรีเมียม',
        installTitle: 'คู่มือการติดตั้ง',
        steps: {
            download: 'ดาวน์โหลดไฟล์ APK จากลิงก์ด้านล่าง',
            install: 'อนุญาตการติดตั้งจากแหล่งที่ไม่รู้จักในการตั้งค่า',
            setup: 'เข้าสู่ระบบด้วย Google เพื่อสำรองข้อมูลบนคลาวด์อัตโนมัติ'
        },
        contactTitle: 'การสนับสนุนลำดับความสำคัญ',
        contactDesc: 'สายตรงถึงนักพัฒนา รับความช่วยเหลือทันทีทางอีเมล',
        nameLabel: 'ชื่อของคุณ',
        emailLabel: 'อีเมลของคุณ',
        messageLabel: 'อธิบายปัญหาของคุณ',
        sendBtn: 'ส่งข้อความ',
        footerText: '© 2024 Hisab Banao สงวนลิขสิทธิ์',
        aboutSection: {
            title: 'เกี่ยวกับ Hisab Banao',
            subtitle: 'การแปลงระบบบัญชีแยกประเภทของอินเดียเป็นดิจิทัล',
            developerTitle: 'นักพัฒนาหลักและผู้สร้าง',
            whoWeAreTitle: 'เราคือใคร',
            whoWeAreDesc: 'Hisab Banao คือโปรเจกต์ที่พัฒนาขึ้นเพื่อช่วยเจ้าของธุรกิจขนาดเล็ก เจ้าของร้าน และบุคคลทั่วไปในการจัดการธุรกรรมประจำวันอย่างมีประสิทธิภาพ',
            transparencyTitle: 'ความโปร่งใสและความปลอดภัย',
            transparencyDesc: 'เราให้ความสำคัญกับความเป็นส่วนตัวของคุณอย่างจริงจัง ข้อมูลทางการเงินของคุณเป็นของคุณ',
            madeWith: 'สร้างด้วย'
        },
        guideSection: {
            title: 'คู่มือผู้ใช้',
            step1: '1. เริ่มต้นใช้งาน',
            loginOptions: 'ตัวเลือกเข้าสู่ระบบ: Google (แนะนำ) หรือโหมดผู้เยี่ยมชม',
            step2: '2. ภาพรวมแดชบอร์ด',
            step3: '3. การจัดการลูกค้า',
            step4: '4. การเพิ่มธุรกรรม',
            voiceInput: 'แตะไอคอนไมค์และพูดตามธรรมชาติ',
            step5: 'รายงานและการแชร์',
            step6: 'การตั้งค่าและความปลอดภัย'
        }
    },
    nl: {
        appName: 'Hisab Banao',
        nav: {
            home: 'Home',
            about: 'Over App',
            guide: 'Gebruikersgids'
        },
        heroTitle: 'Beheers Je Financiën met Hisab Banao',
        heroSubtitle: 'De ultieme grootboek-app voor Android. Veilig, Snel en Stemgestuurd.',
        downloadBtn: 'Download Hisab Banao',
        featuresTitle: 'Premium Functies',
        installTitle: 'Installatiegids',
        steps: {
            download: 'Download het APK-bestand via de link hieronder.',
            install: 'Sta installatie van onbekende bronnen toe in instellingen.',
            setup: 'Log in met Google voor automatische cloudback-up.'
        },
        contactTitle: 'Prioriteitsondersteuning',
        contactDesc: 'Directe lijn naar de ontwikkelaar. Krijg direct hulp via e-mail.',
        nameLabel: 'Je Naam',
        emailLabel: 'Je E-mail',
        messageLabel: 'Beschrijf je probleem',
        sendBtn: 'Bericht Verzenden',
        footerText: '© 2024 Hisab Banao. Alle Rechten Voorbehouden.',
        aboutSection: {
            title: 'Over Hisab Banao',
            subtitle: 'Uw Digitale Grootboekoplossing',
            developerTitle: 'Hoofdontwikkelaar en Maker',
            whoWeAreTitle: 'Wie Wij Zijn',
            whoWeAreDesc: 'Hisab Banao is een gepassioneerd project ontwikkeld om kleine ondernemers, winkeliers en individuen te helpen hun dagelijkse transacties efficiënt te beheren.',
            transparencyTitle: 'Transparantie en Beveiliging',
            transparencyDesc: 'We nemen je privacy serieus. Je financiële gegevens zijn van jou.',
            madeWith: 'Gemaakt met'
        },
        guideSection: {
            title: 'Gebruikersgids',
            step1: '1. Aan de Slag',
            loginOptions: 'Inloggen: Google Login is vereist voor cloudback-up.',
            step2: '2. Dashboard Overzicht',
            step3: '3. Klanten Beheren',
            step4: '4. Transacties Toevoegen',
            voiceInput: 'Tik op het microfoonpictogram en spreek natuurlijk, bijv., \'Ibrahim 500\' om direct toe te voegen.',
            step5: 'Rapporten en Delen',
            step6: 'Instellingen en Beveiliging'
        }
    },
    pl: {
        appName: 'Hisab Banao',
        nav: {
            home: 'Strona główna',
            about: 'O aplikacji',
            guide: 'Przewodnik'
        },
        heroTitle: 'Zarządzaj Finansami z Hisab Banao',
        heroSubtitle: 'Najlepsza aplikacja księgowa dla Androida. Bezpieczna, Szybka i Obsługiwana Głosem.',
        downloadBtn: 'Pobierz Hisab Banao',
        featuresTitle: 'Funkcje Premium',
        installTitle: 'Przewodnik Instalacji',
        steps: {
            download: 'Pobierz plik APK z poniższego linku.',
            install: 'Zezwól na instalację z nieznanych źródeł w ustawieniach.',
            setup: 'Zaloguj się przez Google dla automatycznej kopii zapasowej w chmurze.'
        },
        contactTitle: 'Priorytetowe Wsparcie',
        contactDesc: 'Bezpośrednia linia do programisty. Uzyskaj natychmiastową pomoc przez e-mail.',
        nameLabel: 'Twoje Imię',
        emailLabel: 'Twój E-mail',
        messageLabel: 'Opisz swój problem',
        sendBtn: 'Wyślij Wiadomość',
        footerText: '© 2024 Hisab Banao. Wszelkie Prawa Zastrzeżone.',
        aboutSection: {
            title: 'O Hisab Banao',
            subtitle: 'Cyfryzacja Indyjskiego Systemu Księgowego',
            developerTitle: 'Główny Programista i Twórca',
            whoWeAreTitle: 'Kim Jesteśmy',
            whoWeAreDesc: 'Hisab Banao to pasjonujący projekt opracowany, aby pomóc małym przedsiębiorcom, właścicielom sklepów i osobom prywatnym efektywnie zarządzać codziennymi transakcjami.',
            transparencyTitle: 'Przejrzystość i Bezpieczeństwo',
            transparencyDesc: 'Poważnie traktujemy Twoją prywatność. Twoje dane finansowe należą do Ciebie.',
            madeWith: 'Zrobione z'
        },
        guideSection: {
            title: 'Przewodnik Użytkownika',
            step1: '1. Rozpoczęcie',
            loginOptions: 'Opcje logowania: Google (Zalecane) lub Tryb Gościa.',
            step2: '2. Przegląd Pulpitu',
            step3: '3. Zarządzanie Klientami',
            step4: '4. Dodawanie Transakcji',
            voiceInput: 'Dotknij ikony mikrofonu i mów naturalnie.',
            step5: 'Raporty i Udostępnianie',
            step6: 'Ustawienia i Bezpieczeństwo'
        }
    },
    fa: {
        appName: 'حساب بنائو',
        nav: {
            home: 'خانه',
            about: 'درباره برنامه',
            guide: 'راهنمای کاربر'
        },
        heroTitle: 'امور مالی خود را با حساب بنائو مدیریت کنید',
        heroSubtitle: 'برنامه دفتر کل نهایی برای اندروید. امن، سریع و صوتی.',
        downloadBtn: 'دانلود حساب بنائو',
        featuresTitle: 'ویژگی‌های ویژه',
        installTitle: 'راهنمای نصب',
        steps: {
            download: 'فایل APK را از لینک زیر دانلود کنید.',
            install: 'نصب از منابع ناشناخته را در تنظیمات مجاز کنید.',
            setup: 'برای پشتیبان‌گیری ابری خودکار با Google وارد شوید.'
        },
        contactTitle: 'پشتیبانی اولویت‌دار',
        contactDesc: 'خط مستقیم به توسعه‌دهنده. کمک فوری از طریق ایمیل دریافت کنید.',
        nameLabel: 'نام شما',
        emailLabel: 'ایمیل شما',
        messageLabel: 'مشکل خود را شرح دهید',
        sendBtn: 'ارسال پیام',
        footerText: '© 2024 حساب بنائو. تمامی حقوق محفوظ است.',
        aboutSection: {
            title: 'درباره حساب بنائو',
            subtitle: 'دیجیتالی کردن سیستم دفتر کل هند',
            developerTitle: 'توسعه‌دهنده اصلی و سازنده',
            whoWeAreTitle: 'ما کیستیم',
            whoWeAreDesc: 'حساب بنائو یک پروژه پرشور است که برای کمک به صاحبان کسب‌وکارهای کوچک، مغازه‌داران و افراد در مدیریت کارآمد معاملات روزانه توسعه یافته است.',
            transparencyTitle: 'شفافیت و امنیت',
            transparencyDesc: 'ما حریم خصوصی شما را جدی می‌گیریم. داده‌های مالی شما متعلق به شماست.',
            madeWith: 'ساخته شده با'
        },
        guideSection: {
            title: 'راهنمای کاربر',
            step1: '۱. شروع',
            loginOptions: 'گزینه‌های ورود: Google (توصیه شده) یا حالت مهمان.',
            step2: '۲. نمای کلی داشبورد',
            step3: '۳. مدیریت مشتریان',
            step4: '۴. افزودن تراکنش',
            voiceInput: 'روی نماد میکروفون ضربه بزنید و طبیعی صحبت کنید.',
            step5: 'گزارش‌ها و اشتراک‌گذاری',
            step6: 'تنظیمات و امنیت'
        }
    },
    ms: {
        appName: 'Hisab Banao',
        nav: {
            home: 'Laman Utama',
            about: 'Tentang Aplikasi',
            guide: 'Panduan Pengguna'
        },
        heroTitle: 'Kuasai Kewangan Anda dengan Hisab Banao',
        heroSubtitle: 'Aplikasi lejar terbaik untuk Android. Selamat, Pantas dan Didayakan Suara.',
        downloadBtn: 'Muat turun Hisab Banao',
        featuresTitle: 'Ciri Premium',
        installTitle: 'Panduan Pemasangan',
        steps: {
            download: 'Muat turun fail APK dari pautan di bawah.',
            install: 'Benarkan pemasangan dari sumber tidak diketahui dalam tetapan.',
            setup: 'Log masuk dengan Google untuk sandaran awan automatik.'
        },
        contactTitle: 'Sokongan Keutamaan',
        contactDesc: 'Talian terus kepada pembangun. Dapatkan bantuan segera melalui e-mel.',
        nameLabel: 'Nama Anda',
        emailLabel: 'E-mel Anda',
        messageLabel: 'Huraikan masalah anda',
        sendBtn: 'Hantar Mesej',
        footerText: '© 2024 Hisab Banao. Hak Cipta Terpelihara.',
        aboutSection: {
            title: 'Tentang Hisab Banao',
            subtitle: 'Penyelesaian Lejar Digital Anda',
            developerTitle: 'Pembangun Utama dan Pencipta',
            whoWeAreTitle: 'Siapa Kami',
            whoWeAreDesc: 'Hisab Banao ialah projek bersemangat yang dibangunkan untuk membantu pemilik perniagaan kecil, pemilik kedai dan individu menguruskan transaksi harian mereka dengan cekap.',
            transparencyTitle: 'Ketelusan dan Keselamatan',
            transparencyDesc: 'Kami mengambil privasi anda dengan serius. Data kewangan anda adalah milik anda.',
            madeWith: 'Dibuat dengan'
        },
        guideSection: {
            title: 'Panduan Pengguna',
            step1: '1. Memulakan',
            loginOptions: 'Log Masuk: Google diperlukan untuk sandaran awan.',
            step2: '2. Gambaran Keseluruhan Papan Pemuka',
            step3: '3. Mengurus Pelanggan',
            step4: '4. Menambah Transaksi',
            voiceInput: 'Ketik ikon Mik dan bercakap secara semula jadi, cth., \'Ibrahim 500\' untuk menambah serta-merta.',
            step5: 'Laporan dan Perkongsian',
            step6: 'Tetapan dan Keselamatan'
        }
    },
    uk: {
        appName: 'Hisab Banao',
        nav: {
            home: 'Головна',
            about: 'Про додаток',
            guide: 'Посібник'
        },
        heroTitle: 'Керуйте Фінансами з Hisab Banao',
        heroSubtitle: 'Найкращий додаток для обліку на Android. Безпечний, швидкий, з голосовим введенням.',
        downloadBtn: 'Завантажити Hisab Banao',
        featuresTitle: 'Преміум Функції',
        installTitle: 'Посібник з Встановлення',
        steps: {
            download: 'Завантажте APK файл за посиланням нижче.',
            install: 'Дозвольте встановлення з невідомих джерел у налаштуваннях.',
            setup: 'Увійдіть через Google для автоматичного хмарного резервного копіювання.'
        },
        contactTitle: 'Пріоритетна Підтримка',
        contactDesc: 'Прямий зв\'язок з розробником. Отримайте миттєву допомогу електронною поштою.',
        nameLabel: 'Ваше Ім\'я',
        emailLabel: 'Ваш Email',
        messageLabel: 'Опишіть вашу проблему',
        sendBtn: 'Надіслати Повідомлення',
        footerText: '© 2024 Hisab Banao. Всі права захищені.',
        aboutSection: {
            title: 'Про Hisab Banao',
            subtitle: 'Цифровізація Індійської Системи Обліку',
            developerTitle: 'Головний Розробник і Творець',
            whoWeAreTitle: 'Хто Ми',
            whoWeAreDesc: 'Hisab Banao — це захоплюючий проект, розроблений для допомоги малому бізнесу, власникам магазинів та приватним особам ефективно управляти щоденними транзакціями.',
            transparencyTitle: 'Прозорість і Безпека',
            transparencyDesc: 'Ми серйозно ставимося до вашої конфіденційності. Ваші фінансові дані належать вам.',
            madeWith: 'Зроблено з'
        },
        guideSection: {
            title: 'Посібник Користувача',
            step1: '1. Початок Роботи',
            loginOptions: 'Варіанти входу: Google (Рекомендовано) або Гостьовий режим.',
            step2: '2. Огляд Панелі Керування',
            step3: '3. Управління Клієнтами',
            step4: '4. Додавання Транзакцій',
            voiceInput: 'Натисніть на іконку мікрофона і говоріть природно.',
            step5: 'Звіти та Обмін',
            step6: 'Налаштування та Безпека'
        }
    },
    sw: {
        appName: 'Hisab Banao',
        nav: {
            home: 'Nyumbani',
            about: 'Kuhusu Programu',
            guide: 'Mwongozo wa Mtumiaji'
        },
        heroTitle: 'Simamia Fedha Zako na Hisab Banao',
        heroSubtitle: 'Programu bora ya ledger kwa Android. Salama, Haraka, na Inayowesha Sauti.',
        downloadBtn: 'Pakua Hisab Banao',
        featuresTitle: 'Vipengele vya Premium',
        installTitle: 'Mwongozo wa Usakinishaji',
        steps: {
            download: 'Pakua faili ya APK kutoka kiungo hapa chini.',
            install: 'Ruhusu usakinishaji kutoka vyanzo visivyojulikana katika mipangilio.',
            setup: 'Ingia na Google kwa hifadhi rudufu ya wingu moja kwa moja.'
        },
        contactTitle: 'Msaada wa Kipaumbele',
        contactDesc: 'Mstari wa moja kwa moja kwa msanidi. Pata msaada wa papo hapo kupitia barua pepe.',
        nameLabel: 'Jina Lako',
        emailLabel: 'Barua Pepe Yako',
        messageLabel: 'Eleza tatizo lako',
        sendBtn: 'Tuma Ujumbe',
        footerText: '© 2024 Hisab Banao. Haki Zote Zimehifadhiwa.',
        aboutSection: {
            title: 'Kuhusu Hisab Banao',
            subtitle: 'Suluhisho Lako la Kidijitali la Ledger',
            developerTitle: 'Msanidi Mkuu na Muundaji',
            whoWeAreTitle: 'Sisi Ni Nani',
            whoWeAreDesc: 'Hisab Banao ni mradi wa shauku ulioendelezwa kusaidia wamiliki wa biashara ndogo, wamiliki wa maduka, na watu binafsi kusimamia miamala yao ya kila siku kwa ufanisi.',
            transparencyTitle: 'Uwazi na Usalama',
            transparencyDesc: 'Tunachukulia faragha yako kwa uzito. Data yako ya kifedha ni yako.',
            madeWith: 'Imetengenezwa na'
        },
        guideSection: {
            title: 'Mwongozo wa Mtumiaji',
            step1: '1. Kuanza',
            loginOptions: 'Chaguzi za Kuingia: Google (Inapendekezwa) au Hali ya Mgeni.',
            step2: '2. Muhtasari wa Dashibodi',
            step3: '3. Kusimamia Wateja',
            step4: '4. Kuongeza Miamala',
            voiceInput: 'Gusa ikoni ya Maikrofoni na uzungumze kwa kawaida.',
            step5: 'Ripoti na Kushiriki',
            step6: 'Mipangilio na Usalama'
        }
    },
    he: {
        appName: 'חשבון בנאו',
        nav: {
            home: 'בית',
            about: 'אודות האפליקציה',
            guide: 'מדריך למשתמש'
        },
        heroTitle: 'נהל את הכספים שלך עם חשבון בנאו',
        heroSubtitle: 'אפליקציית הנהלת החשבונות האולטימטיבית לאנדרואיד. מאובטחת, מהירה ותומכת בקול.',
        downloadBtn: 'הורד את חשבון בנאו',
        featuresTitle: 'תכונות פרימיום',
        installTitle: 'מדריך התקנה',
        steps: {
            download: 'הורד את קובץ ה-APK מהקישור למטה.',
            install: 'אפשר התקנה ממקורות לא ידועים בהגדרות.',
            setup: 'התחבר עם Google לגיבוי אוטומטי בענן.'
        },
        contactTitle: 'תמיכה עדיפה',
        contactDesc: 'קו ישיר למפתח. קבל עזרה מיידית באימייל.',
        nameLabel: 'השם שלך',
        emailLabel: 'האימייל שלך',
        messageLabel: 'תאר את הבעיה שלך',
        sendBtn: 'שלח הודעה',
        footerText: '© 2024 חשבון בנאו. כל הזכויות שמורות.',
        aboutSection: {
            title: 'אודות חשבון בנאו',
            subtitle: 'דיגיטליזציה של מערכת הנהלת החשבונות ההודית',
            developerTitle: 'מפתח ראשי ויוצר',
            whoWeAreTitle: 'מי אנחנו',
            whoWeAreDesc: 'חשבון בנאו הוא פרויקט שפותח בתשוקה כדי לעזור לבעלי עסקים קטנים, בעלי חנויות ויחידים לנהל את העסקאות היומיומיות שלהם ביעילות.',
            transparencyTitle: 'שקיפות ואבטחה',
            transparencyDesc: 'אנחנו מתייחסים לפרטיות שלך ברצינות. הנתונים הפיננסיים שלך שייכים לך.',
            madeWith: 'נוצר עם'
        },
        guideSection: {
            title: 'מדריך למשתמש',
            step1: '1. תחילת העבודה',
            loginOptions: 'אפשרויות כניסה: Google (מומלץ) או מצב אורח.',
            step2: '2. סקירת לוח המחוונים',
            step3: '3. ניהול לקוחות',
            step4: '4. הוספת עסקאות',
            voiceInput: 'הקש על סמל המיקרופון ודבר באופן טבעי.',
            step5: 'דוחות ושיתוף',
            step6: 'הגדרות ואבטחה'
        }
    },
    ps: {
        appName: 'حساب جوړ کړئ',
        nav: {
            home: 'کور',
            about: 'د ایپ په اړه',
            guide: 'د کارونکي لارښود'
        },
        heroTitle: 'خپل مالي چارې د حساب بناؤ سره اداره کړئ',
        heroSubtitle: 'د اندروید لپاره غوره لیجر ایپ. خوندي، ګړندی، او غږ فعال.',
        downloadBtn: 'حساب بناؤ ډاونلوډ کړئ',
        featuresTitle: 'پریمیم وظایف',
        installTitle: 'د نصبولو لارښود',
        steps: {
            download: 'APK فایل له لاندې لینک څخه ډاونلوډ کړئ.',
            install: 'په ترتیباتو کې له نامعلومو سرچینو څخه نصبولو ته اجازه ورکړئ.',
            setup: 'د اتوماتیک کلاوډ بیک اپ لپاره د Google سره ننوتئ.'
        },
        contactTitle: 'لومړیتوب ملاتړ',
        contactDesc: 'پراختیا کونکي ته مستقیم لاین. د بریښنالیک له لارې سمدستي مرسته ترلاسه کړئ.',
        nameLabel: 'ستاسو نوم',
        emailLabel: 'ستاسو بریښنالیک',
        messageLabel: 'خپله ستونزه تشریح کړئ',
        sendBtn: 'پیغام واستوئ',
        footerText: '© 2024 حساب بناؤ. ټول حقوق خوندي دي.',
        aboutSection: {
            title: 'د حساب بناؤ په اړه',
            subtitle: 'د هند د لیجر سیسټم ډیجیټلایز کول',
            developerTitle: 'مشر پراختیا کونکی او جوړونکی',
            whoWeAreTitle: 'موږ څوک یو',
            whoWeAreDesc: 'حساب بناؤ یو پرشور پروژه ده چې د کوچنیو سوداګرو، دوکانانو، او اشخاصو سره د ورځني لیږدونو اغیزمن اداره کې مرسته کوي.',
            transparencyTitle: 'شفافیت او امنیت',
            transparencyDesc: 'موږ ستاسو محرمیت جدي اخلو. ستاسو مالي معلومات ستاسو دي.',
            madeWith: 'جوړ شوی له'
        },
        guideSection: {
            title: 'د کارونکي لارښود',
            step1: '1. پیل کول',
            loginOptions: 'د ننوتلو اختیارونه: Google (وړاندیز شوی) یا میلمه حالت.',
            step2: '2. د ډشبورډ کتنه',
            step3: '3. د پیرودونکو اداره',
            step4: '4. لیږدونې اضافه کول',
            voiceInput: 'د مایک آیکون ټک کړئ او په طبیعي ډول وغږیږئ.',
            step5: 'راپورونه او شریکول',
            step6: 'ترتیبات او امنیت'
        }
    },
    ks: {
        appName: 'حِساب بَناوٗ',
        nav: {
            home: 'ہوم',
            about: 'ایپ ہُند بارَس',
            guide: 'یوزَر گایِڈ'
        },
        heroTitle: 'حِساب بَناوٗ سیٖتی پَنَنۍ مالی چیٖز سَمبالِیو',
        heroSubtitle: 'اینڈرایڈ خاطِرَ بِہتَرین لیجَر ایپ۔ مَحفوظ، تیٖز، تہِ آوازَ والین۔',
        downloadBtn: 'حِساب بَناوٗ ڈاونلوڈ کَرِیو',
        featuresTitle: 'پریمیم فیچَرز',
        installTitle: 'اِنسٹالیشَن گایِڈ',
        steps: {
            download: 'APK فایل یَتھِ لِنکَ پیٹھٕ ڈاونلوڈ کَرِیو۔',
            install: 'سیٹِنگز مَنٛز نامعلوم سورسَن پیٹھٕ اِنسٹالیشَن اِجازَت دِیو۔',
            setup: 'آٹومیٹِک کلاوڈ بیک اَپ خاطِرَ گوگَل سیٖتی لاگ اِن کَرِیو۔'
        },
        contactTitle: 'ترجیحی سَپورٹ',
        contactDesc: 'ڈیویلپَر سیٖتی سیدھا رابطٕ۔ ای میل ذَریعٕ فَوری مَدَت حاصِل کَرِیو۔',
        nameLabel: 'تُہُند ناو',
        emailLabel: 'تُہُند ای میل',
        messageLabel: 'پَنُن مَسٔلہ بَیان کَرِیو',
        sendBtn: 'پیغام بھیجِیو',
        footerText: '© 2024 حِساب بَناوٗ۔ سٲری حَق مَحفوظ۔',
        aboutSection: {
            title: 'حِساب بَناوٗ ہُند بارَس',
            subtitle: 'ہِندوستان ہُند لیجَر سِسٹَم ڈِجٹَل بَناوُن',
            developerTitle: 'لیڈ ڈیویلپَر تہِ بنانوری',
            whoWeAreTitle: 'اَسی کُس چھِو',
            whoWeAreDesc: 'حِساب بَناوٗ اَکھ جوشیلا پروجیکٹ چھُ یُس چھوٹ کاروباری، دُکاندارَن تہِ عام لوکَن ہُندٕ روز مرٕ لین دین سَمبالَنَس مَدَت کَران چھُ۔',
            transparencyTitle: 'شفافیت تہِ سیکیورٹی',
            transparencyDesc: 'اَسی تُہُندٕ پرایوَسی جدی اَنان چھِو۔ تُہُند مالی ڈیٹا تُہُند چھُ۔',
            madeWith: 'محبَتَ سیٖتی بناومُت'
        },
        guideSection: {
            title: 'یوزَر گایِڈ',
            step1: '1. شروع کَرُن',
            loginOptions: 'لاگ اِن: کلاؤڈ بیک اپ باپَتہ گوگَل ضروری چھُ۔',
            step2: '2. ڈیش بورڈ جایزٕ',
            step3: '3. گاہکَن ہُند سَمبال',
            step4: '4. لین دین شامِل کَرُن',
            voiceInput: 'مایک آیکَن ٹیپ کَرِیو تہِ قُدرَتی طور بولِیو، مثلاً، \'ابراہیم 500\'۔',
            step5: 'رپورٹَن تہِ شیئَرنگ',
            step6: 'سیٹِنگز تہِ سیکیورٹی'
        }
    },
    sd: {
        appName: 'حساب ٺاھيو',
        nav: {
            home: 'گھر',
            about: 'ايپ بابت',
            guide: 'يوزر گائيڊ'
        },
        heroTitle: 'حساب ٺاھيو سان پنھنجي مالياتي معاملات سنڀاليو',
        heroSubtitle: 'ايندرائيڊ لاءِ بھترين ليجر ايپ. محفوظ، تيز، ۽ آواز فعال.',
        downloadBtn: 'حساب ٺاھيو ڊائونلوڊ ڪريو',
        featuresTitle: 'پريميئم خاصيتون',
        installTitle: 'انسٽاليشن گائيڊ',
        steps: {
            download: 'ھيٺ ڏنل لنڪ مان APK فائل ڊائونلوڊ ڪريو.',
            install: 'سيٽنگز ۾ اڻڄاتل ذريعن کان انسٽاليشن جي اجازت ڏيو.',
            setup: 'خودڪار ڪلائوڊ بيڪ اپ لاءِ گوگل سان لاگ ان ڪريو.'
        },
        contactTitle: 'ترجيحي سپورٽ',
        contactDesc: 'ڊولپر سان سڌو رابطو. اي ميل ذريعي فوري مدد حاصل ڪريو.',
        nameLabel: 'توھان جو نالو',
        emailLabel: 'توھان جو اي ميل',
        messageLabel: 'پنھنجي مسئلي جي وضاحت ڪريو',
        sendBtn: 'پيغام موڪليو',
        footerText: '© 2024 حساب ٺاھيو. سڀ حق محفوظ آھن.',
        aboutSection: {
            title: 'حساب ٺاھيو بابت',
            subtitle: 'توھان جو ڊجيٽل ليجر حل',
            developerTitle: 'ليڊ ڊولپر ۽ باني',
            whoWeAreTitle: 'اسين ڪير آھيون',
            whoWeAreDesc: 'حساب ٺاھيو ھڪ پرجوش پروجيڪٽ آھي جيڪو ننڍن ڪاروبارين، دڪاندارن ۽ ماڻھن کي روزاني ليڻ ڏيڻ سنڀالڻ ۾ مدد ڪرڻ لاءِ تيار ڪيو ويو آھي.',
            transparencyTitle: 'شفافيت ۽ سيڪيورٽي',
            transparencyDesc: 'اسين توھان جي پرائيويسي کي سنجيدگي سان وٺون ٿا. توھان جو مالياتي ڊيٽا توھان جو آھي.',
            madeWith: 'ٺاھيو ويو'
        },
        guideSection: {
            title: 'يوزر گائيڊ',
            step1: '1. شروع ڪرڻ',
            loginOptions: 'لاگ ان آپشنز: گوگل (تجويز ڪيل) يا مھمان موڊ.',
            step2: '2. ڊيش بورڊ جائزو',
            step3: '3. گراھڪن جو انتظام',
            step4: '4. ليڻ ڏيڻ شامل ڪرڻ',
            voiceInput: 'مائڪ آئڪن تي ٽيپ ڪريو ۽ قدرتي طور ڳالھايو.',
            step5: 'رپورٽس ۽ شيئرنگ',
            step6: 'سيٽنگز ۽ سيڪيورٽي'
        }
    }
};
