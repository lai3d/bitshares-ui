 module.exports = {
    languages: {
        en: "English",
        cn: "简体中文",
        fr: "Français",
        ko: "한국어",
        de: "Deutsch",
        es: "İspanyolca",
        tr: "Türkçe"

    },
    header: {
        title: "Bitshares 2.0",
        account: "Hesap",
        dashboard: "Hesaplar",
        explorer: "Araştır",
        exchange: "Kambiyo",
        payments: "Gönder",
        logout: "Çıkış",
        settings: "Ayarlar",
        current: "Kullanılan Hesap",
        create_account: "Hesap Oluştur",
        create_asset: "Aktif Oluştur",
        update_asset: "Aktif Güncelle",
        lock: "Kiliti Kapat",
        unlock: "Aç",
        help: "Yardım",
        locked_tip: "Cüzdan kilidi kapalı.<br/>Açmak için tıkla.",
        unlocked_tip: "Cüzdan kilidi açık .<br/>Kapamak için tıkla."
    },
    propose: "Teklif Et",
    cancel: "İptal",
    account: {
        welcome: "Blokzinciri'ne Hoşgeldiniz",
        asset: "Aktif",
        market_value: "Piyasa Değeri",
        hour_24: "24 Saat",
        recent: "Son hareketler",
        name: "Hesap adı",
        id: "Hesap Kimlik",
        more: "fazlası",
        deposit_withdraw: "Yatır / Çek",
        as_collateral: "Teminat",
        open_orders: "Açık Emirler",
        total_value: "Toplam değeri",
        show_hidden: "Göster",
        hide_hidden: "Gizle",
        ignore: "Yok say",
        unignore: "Var say",
        show_ignored: "Göster",
        hide_ignored: "Gizle",
        whitelist: {
            title: "Beyaz Liste",
            black: "Kara Liste",
            add: "Beyaz listeye ekle",
            add_black: "Kara listeye ekle",
            empty: "%(account)s herhangi bir hesabı beyaz listeye eklemedi.",
            empty_black: "%(account)s herhangi bir hesabı kara listeye eklemedi.",
            white_by: "Beyaz listeye alan",
            black_by: "Kara listeye alan",
            empty_white_by: "%(account)s adlı hesabı beyaz listeye alan olmadı.",
            empty_black_by: "%(account)s adlı hesabı kara listeye alan olmadı."
        },
        vesting: {
            title: "Tutulan Bakiyeler",
            balance_number: "Bakiye #%(id)s",
            no_balances: "Bu hesaba ait bekletilen bakiye bulunmamaktadır.",
            explain: "Bekletilen bakiyeler tavsiye programlarından yada emekçi ödemelerinden elde edilen geilrleri kapsar. Bunların belli bir bekleme süreleri vardır, fonların tümü müsait olana kadar  belli aralıklarla bu bakiyelerin bir kısmı salıverilirler"
        },
        member: {
            stats: "Üyelik",
            join: "Katılma tarihi",
            registrar: "Kaydı yapan",
            referrer: "Yeni Üye Referrer",
            lifetime_referrer: "Ömür-Boyu Referrer",
            network_percentage: "Ağ",
            fee_allocation: "Ücret Tahsisi",
            membership: "Üyelik",
            fees_paid: "Ödenmiş Ömür-Boyu ücretler",
            fees_pending: "Bekleyen ücretler",
            fees_vested: "Bekleyen hak ücretler",
            referrals: "Referraller",
            rewards: "Nakit-İade Ödülleri",
            cashback: "Tutulan bakiye miktarı",
            vested: "Hak edilmiş",
            unknown: "Bilinmeyen üye",
            lifetime: "Ömür-Boyu üye",
            basic: "Normal üye",
            annual: "Yıllık abone",
            upgrade_lifetime: "Ömür-Boyu Üyelik Satın Al",
            subscribe: "Yıllık Abone ol",
            expires: "bitiş tarihi",
            membership_expiration: "Üyelik Bitiş Tarihi",
            fees_cashback: "Ücretler ve nakit paraüstleri",
            coindays: "coin günler",
            earned: "Kazanılmış coin günü",
            required: "Gerekli coin günü",
            remaining: "Bekletilecek günler",
            claim: "Şimdi iste",
            available: "Sahip olunabilecek",
            referral_link: "Davet bağlantınız",
            referral_text: "Bu bağlantıyı BitShares'e davet etmek istediğiniz kişilere gönderin"
        },
        user_issued_assets: {
            symbol: "Sembol",
            name: "Aktif Adı",
            description: "Tanım",
            max_supply: "Maximum arz",
            precision: "Hassasiyet",
            to: "Hesaba çıkar",
            market_fee: "Piyasa ücreti",
            max_market_fee: "Max piyasa ücreti",
            details: "Detaylar",
            primary: "Ana ayarlar",
            optional: "Opsiyonel ayarlar",
            approx_fee: "Yaklaşık ücret",
            exists: "O Aktif zaten mevcut",
            max_positive: "Maksimum pozitif bir sayı olmalıdır",
            core_exchange_rate: "Esas kur oranı",
            quote: "Karşıt aktif miktarı",
            quote_name: "Karşıt Aktif",
            base: "Taban aktif miktarı",
            base_name: "Taban Aktif",
            update_owner: "Sahibi güncelle",
            current_issuer: "Şu anki sahip hesabı",
            new_issuer: "Yeni sahip hesabı",
            flags: "Bayraklar",
            charge_market_fee: "Piyasa ücretinin etkin kıl",
            override_authority: "Aktifi geri transfer edebilir",
            transfer_restricted: "İhrac eden tüm transferleri onlaylamak zorunda",
            disable_confidential: "Gizli işlemler etkisiz",
            white_list: "Tutanları beyaz-listelemeyi gerektir",
            witness_fed_asset: "Tanıkların fiyat beslemelerine müsade et",
            committee_fed_asset: "Kurul üyelerinin fiyat beslemelerine müsade et",
            disable_force_settle: "Zorla kapamayı etkisizleştir",
            global_settle: "İhrac edene genel kapama izni ver",
            advanced: "Gelişmiş",
            need_asset: " İki aktiften biri an azından %(name)s olmalıdır",
            perm_warning: "UYARI: İzinler yalnızca etkisiz hale getirilebilitler, bir kere etkisiziştiridiklerinde tekrar aktif hale getirilemezler!!",
            issued_assets: "Piyasa Sürülmüş Aktifler",
            short: "Kısa ad (max 32 harf)",
            condition: "Durum (max 60 harf)",
            expiry: "Piyasa çözülüm tarihi",
            decimals: "Ondalık hane sayısı",
            mpa: "Akıllı Para",
            pm: "İki değerli tahmin piyasası",
            bitasset_opts: "Akıllı Para tercihleri",
            feed_lifetime_sec: "Dakika olarak yayın ömrü",
            minimum_feeds: "En az yayın sayısı",
            force_settlement_delay_sec: "Zorunlu hesaplaşma gecikmesi (dakika)",
            force_settlement_offset_percent: "Zorunlu hesaplaşmanın yüzdelik sapması",
            maximum_force_settlement_volume: "Max ödeşme hacmi (saatlik toplam arzın yüzdesi olarak)",
            backing: "Kısanın dayandığı aktif",
            error_precision: "Aktif %(asset)s ile aynı hassasiyete sahip değil",
            error_invalid: "Bu aktif kullanılmayabilir",
            market: "Tercih edilen piyasa çifti",
            precision_warning: "Uyarı: Oluşturduktan sonra ondalık hane sayısı değiştirilemeyebilir"
        },
        connections: {
            known: "Tarafından Tanınıyor",
            "black": "Tarafından Kara listelenmiş"
        },
        perm: {
            active: "Etkin İzinler",
            owner: "Sahip İzinleri ",
            memo_key: "Memo anahtarı",
            publish: "Değişimleri Duyur",
            reset: "Değişiklikleri Sıfırla",
            add: "Yetki Ekle",
            type: "Tür",
            key: "Anahtar/İsim",
            weight: "Ağırlık",
            threshold: "Eşik",
            confirm_add: "Ekle",
            cancel: "İptal",
            add_permission_label: "Hesap adı/anahtarını ve ağırlığını girin",
            account_name_or_key: "Hesap adı yada anahtar",
            memo_public_key: "Memo Açık Anahtar",
            warning1: "Etkin izinleri ağırlık toplamı %(weights_total)s,   alt sınır olarak belirlenen %(threshold)s a eşit yada üzerinde olması gerklidir",
            warning2: "Sahip izinleri ağırlık toplamı %(weights_total)s,   alt sınır olarak belirlenen %(threshold)s a eşit yada üzerinde olması gerklidir",
            warning3: "Hesap zaten listenin içinde",
            warning4: "Anahtar zaten listenin içinde",
            action: "İşlem",
            acct_or_key:" Hesap / Anahtar / Adres",
            key_viewer: "Özel anahtar görüntüleyicisi",
            public: "Açık anahtar",
            private: "Private key (WIF - Cüzdan İçine Aktarma Formatı)",
            show: "göster",
            brain: "Beyin anahtarı konumu",
            from: "Hesaptan içeri aktarıldı"
        },
        votes: {
            proxy_short: "Vekil",
            workers_short: "Emekçiler",
            proxy: "Vekil Oy Hesabı",
            no_proxy: "Vekil Yok",
            clear_proxy: "Vekili kaldır",
            go_proxy: "Git",
            name: "Ad",
            info: "Bilgi",
            votes: "Oylar",
            url: "Web Sayfası",
            support: "Destek",
            workers: "Bütçe Öğeleri",
            publish: "Değişimleri Duyur",
            add_witness: "Ekle",
            remove_witness: "Kaldır",
            remove_committee: "Kaldır",
            add_committee: "Ekle",
            add_committee_label: "Kurul Üyesi",
            add_witness_label: "Tanık",
            approve_worker: "Kabul",
            reject_worker: "Red",
            worker_account: "Emekçi hesabı",
            total_votes: "Net oylar",
            votes_against: "Aleyhine oylar",
            daily_pay: "Ödeme",
            daily: "günlük",
            max_pay: "Maximum toplam ödeme",
            unclaimed: "Talep edilmemiş ödeme",
            status: {
                title: "Durum",
                supported: "Destekleniyor",
                rejected: "Red edildi",
                neutral: "Tarafsız"
            },
            start: "Başlangıç tarihi",
            end: "Bitiş günü",
            creator: "Oluşturan",
            recycled: "Geri Dönüşmüş",
            funding: "Fonlama",
            total_budget: "Toplam mevcut emekçi bütçesi",
            unused_budget: "Kullanılmamış emekçi bütçesi",
            new: "Teklif edilen emekler",
            active: "Etkin emekler",
            w_approved_by: "Tanık %(account)s tarafından onaylandı",
            w_not_approved_by: "Tanık %(account)s tarafından onaylanmadı",
            cm_approved_by: "Kurul üyeleri %(account)s tarafından onaylandı",
            cm_not_approved_by: "Kurul üyeleri %(account)s tarafından onaylanmadı",
            already: "Hesap zaten listede",
            proxy_known: "Bilinen proksiler",
            expired: "Süresi bitmiş emekler"
        },
        options: {
            num_witnesses: "Gerekli Tanıklar",
            num_committee: "Gerekli Kurul Üyeleri",
            memo_key: "Memo Anahtar"
        },
        upgrade: "Hesap yükselt",
        unfollow: "Takibi bırak",
        follow: "Takib et",
        pay: "Öde",
        overview: "Genel Bakış",
        bts_market: "Piyasa",
        history: "Geçmiş",
        payees: "Alıcılar",
        permissions: "İzinler",
        voting: "Seçimler",
        orders: "Emirler",
        select_placeholder: "Hesap Seç...",
        errors: {
            not_found: "%(name)s adında bir hesap yok, doğru yazdığınıza emin misiniz?",
            invalid: "Geçersiz hesap adı",
            unknown: "Bilinmeyan hesap",
            not_yours: "Hesap sizin değil"
        },
        collaterals: "Teminat Pozisyonları",
        eq_value: "Eş Değeri",
        percent: "Toplam arzın yüzdesi",
        please_create_account: "Lütfen bir hesap oluşturun",
        create_account: "Hesap oluştur",
        identicon: "Identicon",
        pay_from: "Buradan öde",
        existing_accounts: "Mevcut hesaplar",
        name_input: {
            name_is_taken: "Hesap adı zaten alınmış.",
            not_found: "Hesap bulunamadı.",
            premium_name_faucet: "Bu paralı bir addır. Ücretli adlar hem daha pahalıdır hem de musluk tarafından ücretsiz kayıt yapılmazlar. En azından bir tire , rakam içeren yada sesli harfin bulunmadığı bir ad seçiniz.",
            premium_name_warning: "Bu kayıt yapılması daha pahalı ücretli bir addır. Normal adların içerinde en azından bir tire, rakam bulunur yada hiç sesli harf yoktur."
        },
        propose_from: "Teklifi sunan",
        settle: "Öde",
        "no_orders": "Açık emir yok",
        asset_details: "Aktif detayları"
    },
    pagination: {
        newer: "Daha yeni",
        older: "Daha eski"
    },
    transfer: {
        from: "Gönderen",
        pay_from: "Buradan öde",
        amount: "Miktar",
        to: "Alıcı",
        memo: "Açıklama",
        warn_name_unable_read_memo: "Uyarı: %(name)s bu memoyu okuyamayacaktır",
        fee: "Ücret",
        send: "Gönder",
        final: "Son bakiye",
        balances: "Bakiyeler",
        available: "Mevcut",
        errors: {
            req: "Mecburi alan",
            pos: "Miktar pozitif olmak zorunda",
            valid: "Lütfen geçerli bir pozitif numara giriniz",
            balance: "Sonuç bakiye 0'dan büyük olmalıdır",
            insufficient: "Yetersiz Bakiye"
        },
        back: "GERİ",
        confirm: "ONAYLA",
        broadcasting: "Yayınlanıyor...",
        broadcast: "Transfer işleminiz yayınlandı",
        again: "BAŞKA BİR TRANSFER GERÇEKLEŞTİR",
        see: "TRANSFER İŞLEMLERİMİ GÖR",
        close: "Kapalı",
        memo_unlock: "Bu memoyu görebilmek için cüzdan kilidini açın",
        optional: "Tercihe bağlı"
    },
    operation: {
        pending: "bekleyen %(blocks)s blok",
        no_recent: "Yeni bir işlem yok",
        reg_account: "{registrar} kayıt yaptırdı - yeni hesap: {new_account}",
        transfer: "{from} {amount} gönderdi - alan hesap: {to}",
        proposal_create: "{account} bir işlem teklifi oluşturdu",
        proposal_update: "{account} bir teklif işlemi güncelledi",
        proposal_delete: "{account}  bir işlem teklifi sildi",
        fill_order: "{account} {received} satın aldı - fiyat: {price} ",
        vesting_balance_withdraw: "{account} bekleyen bakiyeyi çekti - miktar:  {amount}",
        balance_claim: "{account} bakiye sahiplendi - miktar: {amount}",
        publish_feed: "{account} fiyat duyurdu: {price}",
        set_proxy: "{account} oy kullanması için {proxy} adlı hesabı vekil tayin etti",
        update_account: "{account} hesap verilerini güncelledi",
        limit_order_sell: "{account} {amount} satış emri verdi - fiyat: {price} ",
        limit_order_buy: "{account} {amount} alış emri verdi - fiyat: {price} ",
        limit_order_cancel: "{account} emir iptal etti: #%(order)s",
        call_order_update: "{account} {debtSymbol} borcunu {debt} kadar ve teminatı {collateral} kadar değiştirdi",
        asset_reserve: "{account} {amount} kadar miktarı rezerve ayırdı",
        asset_issue: "{account} tarafından {amount} {to} adlı hesaba düzenlendi",
        asset_fund_fee_pool: "{account} tarafından {asset} ücret havuzuna {amount} eklendi",
        asset_create: "{account} şu aktifi oluşturdu: {asset}",
        asset_update: "{account} şu aktifi güncelledi: {asset}",
        lifetime_upgrade_account: "{account} ömür-boyu üyeliğe yükseltildi",
        annual_upgrade_account: "{account} yıllık üyeliğe yükseltildi",
        unlisted_by: "{lister} listeden {listee} adlı hesabı çıkardı",
        whitelisted_by: "{lister} tarafından {listee} beyaz listeye alındı",
        blacklisted_by: "{lister} tarafından {listee} kara-listeye aldı",
        transfer_account: "{account} adlı hesabın mülkiyeti {to} adlı hesaba devredildi.",
        asset_update_feed_producers: "{account} şu aktifin fiyat kaynaklarını güncelledi:{asset}",
        asset_fund_fee_pool: "{account} tarafından {asset} ücret havuzuna {amount} eklendi",
        asset_settle: "{account} ödeme talep etti - miktar: {amount}",
        asset_global_settle: "{account} genel ödeme talep etti - aktif: {asset}  fiyat: {price} ",
        witness_create: "{account} tanık olmaya terfi edildi",
        witness_update: "{account} tanık bilgilerini güncelledi",
        witness_pay: "Hesaba tanık ödemesi çekildi",
        witness_receive: "Tanık tarafından tanık geldi",
        committee_member_update_global_parameters: "{account} evrensel kurul parametrelerini güncelledi",
        worker_create: "{account} günlük {pay} ödemeli bir emek teklifi sundu"
    },
    proposal: {
        transfer: "Transfer miktarı: {amount}, nereden: {from}, nereye: {to}",
        limit_order_create: "  %(account)s adlı  hesap adına %(sell_amount)s fiyatı üzerinden  %(buy_amount)s almak için emir ver",
        limit_order_sell: " {account} adına {price} fiyatı üzerinden {amount} satmak için bir emir ver",
        limit_order_buy: "{account} adına {price} fiyatı üzerinden {amount} almak için bir emir ver",
        committee_member_update_global_parameters: "{account} tarafından kurul genel parametreleri güncellemesi",
        action: "Hareketler",
        expires: "Bitiş süresi",
        update_account: "{account} için hesap verilerini güncelle",
        status: "Durum",
        update: {
            active_approvals_to_add: "Eklenecek etkin onaylar",
            active_approvals_to_remove: "Kaldırılacak etkin onaylar",
            owner_approvals_to_add: "Eklenecek sahip onayları",
            owner_approvals_to_remove: "Kaldırılacak sahip onayları",
            key_approvals_to_add: "Eklenecek anahtar onayları",
            key_approvals_to_remove: "Kaldırılacak anahtar onayları",
        },
        approve: "Onayla",
        reject: "Reddet"
    },
    transaction: {
        confirm: "Lütfen işlemi teyit et",
        broadcast_success: "İşlem yayınlandı",
        transaction_confirmed: "İşlem teyit edildi",
        broadcast_fail: "İşlemin yayınlanması başarısız: %(message)s",
        broadcasting: "İşlem yayınlanıyor..",
        broadcasting_short: "Yayınlanıyor..",
        sent: "gönderdi , miktar :  ",
        to: "alan:",
        received: "alan:",
        from: "gönderen",
        amount_sell: "Satılacak miktar",
        expiration: "Bitiş tarihi ",
        fill_or: "Doldur yada öldür",
        min_receive: "Alınacak minimum miktar",
        seller: "Satıcı",
        collateral: "Teminat",
        coll_ratio: "Başlangıç teminat oranı",
        coll_maint: "Teminat sürdürme oranı",
        "create_key": "Açık anahtar oluşturuldu",
        at: "için şu kurdan:",
        coll_of: "teminatıyla",
        feed_producer: "Aktif için bir yayın üreticisi oldu",
        feed_price: "Yayın fiyatı",
        by: "tarafından",
        burn_asset: "Yakıldı",
        fund_pool: "%(asset)s ücret havuzunu şununla finanse etti:",
        committee_member_create: "Kurul üyesi oluşturuldu",
        withdraw_permission_create: "Hesaptan çekme izni verildi",
        withdraw_permission_update: "Hesaptan çekme iznini güncelledi",
        withdraw_permission_claim: "Çekme iznini sahiplendi",
        withdraw_permission_delete: "Hesaptan çekme izni silindi",
        paid: "tarafından",
        obtain: "ödendi, ",
        global_parameters_update: "Evrensel parametrelerini güncelledi",
        file_write: "Bir dosya yazıldı",
        vesting_balance_create: "Şunun bekletilen bakiyesini oluşturdu :",
        for: "için",
        bond_create_offer: "Senet teklifi oluştur",
        bond_cancel_offer: "Senet teklifini iptal etti",
        bond_accept_offer: "Senet teklifi kabul edilen:",
        bond_claim_collateral: "Teminatı sahiplendi :",
        bond_pay_collateral: "Ödedi teminatını:",
        custom: "Özel işlem yaratıldı",
        order_id: "Talimat no",
        asset_claim_fees: "%(asset)s ücret havuzundan %(balance_amount)s ücreti aldı",
        balance_owner: "Bakiye sahibinin anahtarı",
        balance_id: "Bakiye No",
        deposit_to: "Hesaba yatırıldı",
        claimed: "Toplam sahiplenildi",
        borrow_amount: "Borç",
        funding_account: "Kaynak Hesap",
        delta_collateral: "Teminat değişimi",
        delta_debt: "Borç değişimi",
        new_url: "Websitesi",
        publisher: "Duyuran",
        market_fee: "Piyasa ücreti",
        max_market_fee: "Maksimum piyasa ücreti",
        blinding_factor: "Körlük faktörü",
        outputs: "Çıkanlar",
        inputs: "Girdiler",
        settlement_date: "Uzlaşma tarihi",
        asset_reserve: "rezerv aktif miktarı",
        trxTypes: {
            transfer: "Transfer",
            limit_order_create: "Emir Ver",
            limit_order_cancel: "Emir İptal",
            call_order_update: "Marjin güncelleme",
            account_create: "Yeni Hesap Açılışı",
            account_update: "Hesap güncelleme",
            account_whitelist: "Beyaz Listeye Alma",
            account_upgrade: "Hesap yükseltme",
            account_transfer: "Hesap transferi",
            asset_create: "Yeni Oluştur",
            asset_update: "Güncelle",
            asset_update_bitasset: "Akıllıpara güncelleme",
            asset_update_feed_producers: "Aktif feed üreticileri güncelleme",
            asset_issue: "Düzenle",
            asset_reserve: "Rezerve et",
            asset_fund_fee_pool: "Aktif ücret havuzu finansı",
            asset_settle: "Aktif ödemesi",
            asset_global_settle: "Genel Aktif Ödemesi",
            asset_publish_feed: "Yayın Duyurma",
            committee_member_create: "Kurul üyesi oluşturma",
            committee_member_update : "Kurul üyesini güncelle",
            witness_create: "Tanık oluşturma",
            witness_update: "Tanık güncelleme",
            witness_withdraw_pay: "Tanık maaş çekimi",
            proposal_create: "Teklif oluşturma",
            proposal_update: "Teklif güncelleme",
            proposal_delete: "Teklif silme",
            withdraw_permission_create: "Hesaptan çekme izni oluşturma",
            withdraw_permission_update: "Hesaptan çekme izni güncelleme",
            withdraw_permission_claim: "Çekme izini talebi",
            withdraw_permission_delete: "Çekme izni silme",
            fill_order: "Emir İcra",
            committee_member_update_global_parameters: "Evrensel parametreleri güncelleme",
            vesting_balance_create: "Bekletilen bakiye oluşturma",
            vesting_balance_withdraw: "Bekletilen bakiyeyi çekme",
            worker_create: "Bütçe öğesi oluşturma",
            custom: "Kişiye özel",
            assert: "İşlem beyanı",
            balance_claim: "Bakiye talebi",
            override_transfer: "Transferi yenileme",
            transfer_to_blind: "Kör hesaba transfer",
            blind_transfer: "Kör transfer",
            transfer_from_blind: "Kör hesaptan transfer et",
            asset_claim_fees: "Aktif ücretlerini talep et"
        },
        feeGroups : {
         general : "Genel",
         asset   : "Aktife Özel",
         market  : "Piyasaya Özel",
         account : "Hesaba Özel",
         business: "İş İdaresi",
        },
        feeTypes: {
            _none : "Ücretsiz",
            fee : "Normal İşlem Ücreti",
            price_per_kbyte: "KByte'lık İşlem Başına Fiyat",
            basic_fee : "Temel Ücret",
            premium_fee : "Paralı Adlar İçin Ücret",
            membership_annual_fee : "Yıllık Üyelik",
            membership_lifetime_fee : "Ömür-Boyu Üyelik",
            symbol3 : "3 Haneli Semboller",
            symbol4 : "4 Haneli Semboller",
            long_symbol : "Uzun Semboller"
        },
        whitelist_states: {
            no_listing: "Listeleye alınmamış",
            white_listed: "Beyaz listeye alınmış",
            black_listed: "Kara listeye alınmış",
            white_and_black_listed: "Beyaz ve kara listeye alınmış"
        },
        csv: ".csv olarak dışarı aktar",
        csv_tip: "Geçmiş işlemleri virgülle ayrılmış .csv dosyası olarak indir"
    },
    explorer: {
        accounts: {
            title: "Hesaplar"
        },
        blocks: {
            title: "Blokzinciri",
            globals: "Evrensel parametreler",
            recent: "Son bloklar", 
            trx: "İşlem",
            block_times: "Blok süreleri",
            block_time: "Blok süresi",
            transactions: "işlem sayısı",
            recently_missed_blocks: "Son kaçırılan bloklar",
            trx_per_block: "İşlem/blok",
            active_committee_members: "Etkin kurul üyeleri",
            active_witnesses: "Etkin Tanık",
            avg_conf_time: "Ortalama teyit süresi",
            trx_per_sec: "İşlem/s",
            last_block: "Son blok",
            current_block: "Şimdiki Blok"

        },
        block: {
            title: "Blok",
            id: "Blok Kimlik",
            witness: "Tanık",
            count: "İşlem Sayısı",
            date: "Tarih",
            time: "Zaman",
            previous: "Bir önceki",
            previous_secret: "Bir önceki gizli",
            next_secret: "Bir sonraki gizli hash",
            op: "İşlem",
            trx: "İşlem",
            op_type: "İşlem türü",
            fee_payer: "Ücret ödeyen hesap",
            key: "Açık anahtar",
            transactions: "İşlem Sayısı",
            account_upgrade: "Yükseltilecek hesap",
            lifetime: "Ömür-boyu üyeliğine yükselt",
            authorizing_account: "Yetki veren hesap ",
            listed_account: "Kaydedilmiş hesap",
            new_listing: "Yeni kayıt",
            asset_update: "Güncellenecek Aktif",
            common_options: "Yaygın seçenekler",
            new_options: "Yeni seçenekler",
            new_producers: "Yeni yayın üreticileri",
            asset_issue: "Düzenlenecek miktar",
            max_margin_period_sec: "Max marjin periodları (s)",
            call_limit: "Çağrı Sınırı",
            short_limit: "Short limit",
            settlement_price: "Uzlaşma"
        },
        assets: {
            title: "Aktifler",
            market: "Akıllı Paralar",
            user: "Kullanıcı Aktifleri",
            prediction: "Tahmin piyasası",
            symbol: "Sembol",
            id: "Kimlik",
            issuer: "İhraç Eden",
            precision: "Hassasiyet"
        },
        asset: {
            title: "Aktif",
            not_found: "%(name)s diye bir aktif mevcut değil",
            summary: {
                asset_type: "Aktif türü",
                issuer: "İhraç Eden",
                current_supply: "Mevcut Arz",
                stealth_supply: "Gizli arz",
                market_fee: "Piyasa ücreti",
                max_market_fee: "Max Piyasa ücreti"
            },
            price_feed: {
                title: "Fiyat Yayını",
                settlement_price: "Uzlaşma",
                maintenance_collateral_ratio: "Sürdürme Teminat Oranı (MCR)",
                maximum_short_squeeze_ratio: "Maksimum kısa sıkıştırma oranı (MSSR)"
            },
            fee_pool: {
                title: "Ücret Havuzu",
                core_exchange_rate: "Esas Kur (CER)",
                pool_balance: "Havuz bakiyesi",
                unclaimed_issuer_income: "Talep edilmemiş ihraççı geliri",
                claim_fees: "Ücretleri talep et",
                fund_text: "Ücret havuzu (asset)s olarak ödenen işlem ücretlerini %(core)s'e çevirerek   ödemek için kullanılır. Eğer ücret havuzunda para kalmazsa, ücretler artık %(asset)s olarak ödenemez ve %(core)s kullanılır ",
                claim_text: "Aktifi ihraç eden burada biriken ücretleri talep edebilir."
            },
            permissions: {
                title: "İzinler",
                max_market_fee: "Max piyasa ücreti",
                max_supply: "Max arz",
                blacklist_authorities: "Kara liste yetkiler",
                blacklist_markets: "Kara liste piyasları",
                whitelist_authorities: "Beyaz Liste yetkiler",
                whitelist_markets: "Beyaz Liste piyasaları"
            },
            price_feed_data: {
                title: "Fiyat Yayın Verileri",
                settlement_price: "Uzlaşma",
                core_exchange_rate: "CER",
                maintenance_collateral_ratio: "MCR",
                maximum_short_squeeze_ratio: "MSSR",
                publisher: "Duyuran",
                published: "Duyurdu"
            }
        },
        witnesses: {
            title: "Tanıklar",
            current: "Şimdiki tanık",
            participation: "Katılım oranı",
            pay: "Blok-başına-ödeme",
            budget: "Kalan bütçe",
            next_vote: "Sıradaki oy güncellemesi",
            card: "Kart görünümü",
            table: "Tablo görünümü",
            rank: "Sıralama",
            last_confirmed: "Son teyit edilen",
            missed: "Kaçırılan bloklar"

        },
        committee_members: {
            title: "Kurul Üyeleri",
            active: "Toplam etkin kurul üyesi"
        },
        committee_member: {
            title: "Kurul üyesi"
        },
        workers: {
            title: "Bütçe Öğeleri"
        },
        proposals: {
            title: "Teklif edilmiş işlemler"
        },
        account: {
            title: "Hesap"
        },
        fees: {
            type: "Ücret Türü",
            fee: "Standart Ücret",
            feeeq: "(eşdeğer)",
            feeltm: "Ömürboyu/Yıllık Üye Ücreti",
            feeltmeq: "(eşdeğer)",
        }
    },
    settings: {
        inverseMarket: "Piyasa eğilim tercihi",
        unit: "Tercih edilen hesap birimi",
        confirmMarketOrder: "Piyasa emirleri için teyit iste",
        locale: "Lisanı değiştir",
        confirm_yes: "Herzaman",
        confirm_no: "Hiçbirzaman",
        always_confirm: "Onay için herzaman sor",
        wallets: "Cüzdanlar",
        connection: "API Bağlantısı",
        add_ws: "Yeni websocket API ekle",
        remove_ws: "Websocket API'sini kaldır",
        faucet_address: "Musluk Adresi",
        showSettles: "Ödeme emirlerini derinlik tablosunda gösterin ",
        yes: "Evet",
        no: "Hayır",
        walletLockTimeout: "Cüzdan otomatik kitenme süresi (saniye)",
        themes: "Tema",
        "darkTheme": "Koyu tema",
        "lightTheme": "Hafif tema",
        "olDarkTheme": "Openledger koyu",
        reset: "Ayarları sıfırla"
    },
    footer: {
        title: "Graphene",
        block: "Baş blok",
        loading: "Yüklüyor...",
        backup: "Yedekleme Gerekiyor",
        nosync: "Blokzinciri ile eşzamanlı değil, lütfen senkronize olana kadar bekleyin..",
        connection: "Blokzinciri bağlantısı yok",
        brainkey: "Beyin anahtarının yedeklenmesi tavsiye edilir "
    },
    exchange: {
        market: "Piyasa",
        price_history: "Fiyat Tablosu",
        order_depth: "Piyasa Derinliği",
        history: "Piyasa alım-satımları",
        my_history: "Alım-satımlarım",
        balance: "Bakiye",
        lowest_ask: "En düşük",
        highest_bid: "En yüksek",
        total: "Toplam",
        value: "Değer",
        price: "Fiyat",
        latest: "En Son",
        call: "Çağrı Fiyatı",
        core_rate: "Ücret Oranı",
        settle: "Ödeme",
        squeeze: "Teminat Tamamlama Çağrısı Fiyatı",
        maintenance: "Sürdürme Çağrı Fiyatı",
        your_price: "Sizin Çağrı Fiyatınız",
        volume: "Hacim",
        vol_short: "Hacim",
        spread: "Fark",
        quantity: "Miktar",
        buy: "Al",
        sell: "Sat",
        receive: "Tahsil",
        vertical: "Dikey",
        horizontal: "Yatay",
        confirm_buy: "Alma emrini onayla: Miktar :%(buy_amount)s miktarda %(buy_symbol)s   Fiyat: %(price_amount)s %(price_symbol)s",
        confirm_sell: "Emri teyit et: Sat %(sell_amount)s %(sell_symbol)s fiyat %(price_amount)s %(price_symbol)s",
        market_name: "Piyasalarım",
        quote_supply: "Karşıt arzı",
        base_supply: "Taban arzı",
        more: "Piyasa bul",
        volume_24: "24 Saat",
        change: "Değişim",
        confirm: "Verdiğiniz emir şimdiki fiyattan %(diff)s% kadar farklı, emin misiniz?",
        indicators: "Göstergeler",
        rsi: "Relatif Güç İndeksi",
        ema: "Üssel Hareketli Ortalama",
        sma: "Basit Hareketli Ortalama",
        atr: "Ortalama Gerçek Fiyat Aralığı",
        period: "Süre (gün)",
        overbought: "Aşırı Alım",
        oversold: "Aşırı Satış",
        index: "Indeks",
        my_bids: "Alış Fiyatlarım",
        my_asks: "Satış Fiyatlarım",
        my_orders: "Açık emirlerim",
        settle_orders: "Emirleri öde",
        asks: "Satış emirleri",
        bids: "Alım emirleri",
        no_data: "Veri yok",
        time: "Mum Biçimi",
        zoom: "Yakınlaştır",
        borrow: "Ödünç Al",
        no_balance: "Yetersiz bakiye",
        invalid_amount: "Geçersiz miktar",
        invalid_price: "Geçersiz fiyat",
        show_bids: "Tüm alış fiyat göster",
        show_asks: "Tümünü göster",
        hide: "Gizle",
        short: "Kısa",
        others: "Diğerleri",
        invert: "Fiyatı ters çevir",
        to_market: "Piyasaya git",
        zoom_all: "All",
        settings: "Grafik tercihleri"
    },
    fees: {
     title: "Ücret Tarifesi"
    },
    markets: {
        title: "Piyasalar",
        base: "Taban Aktif",
        market_search: "Piyasa Arama",
        filter: "Filtrele",
        core_rate: "Esas oran",
        supply: "Arz",
        search: "Ara",
        preferred: "Piyasalarım"
    },
    wallet: {
        title: "Cüzdan",
        confirm: "Parola (teyit)",
        password: "Parola",
        existing_password: "Mevcut parola",
        change_password: "Parolayı Değiştir",
        change_wallet: "Cüzdanı Değiştir",
        wallet_created: "Cüzdan Oluşturuldu",
        create_wallet: "Cüzdan Oluştur",
        import_bts1: "BitShares 0.9.3c den aktarım",
        setup_wallet: "Cüzdanınızı Oluşturun",
        delete_wallet: "Cüzdanı Sil",
        delete_confirm_line1: "KESİNLİKLE emin misiniz?",
        delete_confirm_line2: "Bunu okumazsanız beklenmedik şeyler olabilir!",
        delete_confirm_line3: "Bu işlem geri düzeltilemez.",
        delete_wallet_name: "(%(name)s)Adlı Cüzdanı Sil",
        balance_claims: "Bakiye Talepleri",
        download: "İndir",
        name: "Cüzdan Adı",
        create: "Oluştur",
        console: "Cüzdan Yönetim Paneli",
        create_backup: "Yedek Oluştur",
        backup_brainkey: "Beyin-anahtarı Yedekle",
        create_backup_of: "(%(name)sAdlı Cüzdanı Yedekle)",
        import_backup: "Yedeği İçeri Aktar",
        restore_backup: "Yedekten Geri Yükle",
        import_keys: "İçeri Anahtar Aktar",
        import_keys_tool: "Anahtar Aktarım Aracı",
        brainkey: "Beyin-anahtarı",
        new_wallet: "Yeni Cüzdan",
        active_wallet: "Etkin Cüzdan",
        verified: "Doğrulanmış",
        verify_prior_backup: "Yedeklemeden Önce Doğrula",
        brainkey_not_verified: "Bu Beyin-anahtarı teyit edilmemiş",
        cancel: "İptal",
        reset: "Sıfırla",
        done: "Tamam",
        verify: "Doğrula",
        invalid_format: "Geçersiz Biçem",
        enter_password: "Parola Girin",
        downoad: "İndir",
        new_wallet_name: "Yeni Cüzdan Adı",
        wallet_exist: "Zaten mevcut , yeni bir ad seçin",
        wallet_exist_with_name: "(%(name)s) adında bir cüzdan zaten mevcut, lütfen adını değiştirin",
        accept: "Kabul",
        ready_to_restore: "Eski Haline Dönmeye Hazır",
        restore_wallet_of: "(%(name)s Adlı Cüzdanı Eski Haline Getir)",
        restore_success: "(%(name)s)Adlı cüzdan başarıyla eski haline döndürüldü",
        change: "Değiştir (%(name)s Cüzdan)",
        import_20_notice1: "İlk önce BTS 2.0+ YEDEĞİNİZİ içeri aktarın ",
        import_20_notice2: "(eğer varsa)",
        loading_balances: "Bakiye istemleri yükleniyor",
        no_balance: "Bakiye talebi yok",
        claim_balance: "Bakiye Talebi",
        claim_balances: "Bakiyelerı Sahiplen",
        balance_claim_lookup: "Bakiye Arama",
        unclaimed: "Sahiplenilmemiş",
        unclaimed_vesting: "Çekilebilecek miktar",
        no_accounts: "Hesap Yok",
        brainkey_no_match: "Beyin-anahtarı uyuşmuyor, devam et",
        reenter_brainkey: "Beyin-anahtarını tekrar gir",
        pwd4brainkey: "Beyin-anahtarını göstermek için parolayı gir",
        show_brainkey: "Beyin Anahtarını Göster",
        brainkey_w1: "UYARI : Bunu bir kağıda yazın yada çıktı alın .",
        brainkey_w2: "Kurtarma anahtarınıza ulaşan herhangi bir kimse",
        brainkey_w3: "bu cüzdan içindeki fonlara ulaşabilir.",
        custom_brainkey: "Kişiye Özel Beyin-anahtarı (gelişmiş)",
        last_backup: "Son yedekleme",
        never_backed_up: "Bu cüzdan hiç yedeklenmedi",
        need_backup: "Bu cüzdanın yedeklenmesi gerek",
        noneed_backup: "Yedekleme gerekmiyor"
    },
    borrow: {
        title: "%(asset_symbol)s Marjin",
        no_valid: "%(asset_symbol)s için geçerli yayın mevcut değil",
        coll_ratio: "Teminat oranı",
        call_limit: "Piyasa Çağrı Limiti",
        adjust: "Pozisyonu Güncelle",
        close: "Pozisyonu Kapa",
        update: "Güncelle",
        errors: {
            below: "Teminat oranı çok düşük, bu pozisyon anında marjin-çağrılır",
            collateral: "Yetersiz teminat seviyesi"
        }
    },
    modal : {
      issue : {
        to: "Buna çıkar",
        amount: "Çıkarılacak miktar",
        submit: "Varlık İhraç Et"
      },
      withdraw : {
        amount: "Çekilecek Miktar",
        address: "Şu Adrese Çekilecek",
        submit: "Çek"
      },
      deposit : {
        amount: "Yatıralacak Miktar",
        submit: "Yatır"
      },
      settle: {
        title: "%(asset)s ödenmesini talep et",
        amount: "Ödenecek miktar",
        submit: "Aktif tasfiye et"
      },
      reserve: {
        title: "Rezerv (yakılan) aktif",
        amount: "Rezerv edilecek miktar",
        from: "Rezerv yapılacak hesap",
        submit: "Rezerv"
      },
      ok: "Tamam"
    },
    init_error: {
        title: "Uygulama başlatma problemleri",
        ws_status: "Websocket Bağlantı Durumu",
        retry: "Yeniden dene",
        connected: "Bağlandı",
        not_connected: "Bağlı değil",
        browser: "Desteklenmeyen tarayıcı",
        browser_text: "Kullandığınız tarayıcı üzerinde testlerimiz devam etmektedir, bu yüzden BitShares Cüzdanını desteklemeyebilir. Cüzdanınızı yedekleyip Chrome Tarayıcısını kullanarak içeri aktarmanızı önemle tavsiye ederiz. Mesuliyet size aittir.",
        understand: "Anladım"
    },
    refcode: {
        claim: "Talep",
        claim_refcode: "Referral Kodunu Talep Et",
        refcode_optional: "Referral Kodu (opsiyonel)",
        enter_refcode: "Referral Kodunu Gir"
    },
    proposal_create : {
        review_period: "İnceleme süresi başlangıcı",
        expiration_time: "Bitiş süresi",
        proposed_operations: "Teklif edilen işlemler",
        fee_paying_account: "Ücreti ödeyen hesap"
    },
    gateway: {
        bridge: "Köprü",
        gateway: "Kapı",
        symbol: "Sembol",
        deposit_to: "Yatırılacak Yer",
        balance: "Bakiye",
        generate: "Yeni Üret",
        deposit: "Yatır",
        withdraw: "Çek",
        inventory: "Envanter",
        scan_qr: "QR Tara",
        transwiser: {
            gateway: "Transwiser",
            visit_weidian: "Yatırmak için ziyaret edin",
            deposit_title: "%(asset)s'a RMB yatırın",
            withdraw_title: "RMB'ye %(asset)s çekin",
            alipay: "ALIPAY Hesap Adı",
            withdraw_note: "Şimdilik sadece ALIPAY çekmek destekleniyor. Aktifiniz 1:1 oranında çevrilecektir ve ALIPAY hesabınıza RMB gönderilecektir.",
            you_will_receive: "%(amount)s miktarında RMB elinize geçecek"
        },
        meta: {
            open_website: "Websitesini Aç"
        }
    }
};
