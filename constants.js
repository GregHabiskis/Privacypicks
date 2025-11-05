let imgIdCounter = 1;

export const RESOURCES_DATA = [
  {
    id: 'software',
    title: 'Software',
    icon: 'Cpu',
    subCategories: [
      {
        id: 'browsers-extensions',
        title: 'Web Browsers & Extensions',
        icon: 'Globe',
        links: [
          { name: 'Brave', sources: [{type: 'website', url: 'https://brave.com/'}, {type: 'github', url: 'https://github.com/brave/brave-browser'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=com.brave.browser'}, {type: 'appstore', url: 'https://apps.apple.com/us/app/brave-private-web-browser/id1052879175'}], imgId: imgIdCounter++, description: `Brave browser attempts to offer a familiar browser experience with privacy & security by default. Brave does many neat things for users out-of-the-box, but apossible annoyance is the cryptocurrency features. You can disable them using this <a href="https://github.com/MulesGaming/brave-debloatinator" class="text-primary hover:brightness-90" target="_blank" rel="noopener noreferrer">script.</a>`, tags: ['Open Source', 'Chromium', 'Android', 'iOS', 'Windows', 'MacOS', 'Linux'], customIcon: '/Icons/brave-browser.svg' },
          { name: 'Cromite', sources: [{type: 'website', url: 'https://www.cromite.org/'}, {type: 'github', url: 'https://github.com/uazo/cromite'}, {type: 'fdroid', url: 'https://github.com/uazo/cromite/releases'}], imgId: imgIdCounter++, description: `Cromite is a Chromium fork based on <a href="https://www.bromite.org/" class="text-primary hover:brightness-90" target="_blank" rel="noopener noreferrer">Bromite</a> with built-in support for ad blocking and an eye for privacy. It is currently supported on Android, Windows, & Linux.`, tags: ['Open Source', 'Chromium', 'Android', 'Windows', 'Linux'] },
          { name: 'LibreWolf', sources: [{type: 'website', url: 'https://librewolf.net/'}, {type: 'gitlab', url: 'https://gitlab.com/librewolf-community'}], imgId: imgIdCounter++, description: `LibreWolf tackles most Firefox hardening out-of-the-box & does a decent job of maintaining security updates.`, tags: ['Open Source', 'Gecko', 'Windows', 'MacOS', 'Linux'] },
          { name: 'Mullvad', sources: [{type: 'website', url: 'https://mullvad.net/browser'}, {type: 'gitlab', url: 'https://gitlab.torproject.org/tpo/applications/mullvad-browser'}], imgId: imgIdCounter++, description: `Mullvad Browser offers a fantastic middle-ground between the strong protections of a hardened Firefox, and the advantages of Tor Browser for desktop. It's co-developed by Mullvad & the official Tor Project.`, tags: ['Open Source', 'Gecko', 'Windows', 'MacOS', 'Linux'] },
          { name: 'TOR', sources: [{type: 'website', url: 'https://www.torproject.org/'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=org.torproject.android'}, {type: 'fdroid', url: 'https://guardianproject.info/fdroid/'}, {type: 'gitlab', url: 'https://gitlab.torproject.org/tpo/applications/tor-browser'}], imgId: imgIdCounter++, description: `The Tor Browser is one of the safest browsing experiences by prioritizing anonymity & freedom of information above all else. It's one of the most effective and accessible anonymity tools.`, tags: ['Open Source', 'Gecko', 'Android', 'Windows', 'MacOS', 'Linux'] },
          { name: 'Mull', sources: [{type: 'website', url: 'https://divestos.org/pages/browsers'}, {type: 'fdroid', url: 'https://f-droid.org/en/packages/us.spotco.fennec_dos/'}], imgId: imgIdCounter++, description: 'Mull is a privacy-hardened fork of Firefox for Android, from the DivestOS project. It enables many features upstreamed by the Tor Uplift project using a curated custom list of preferences.', tags: ['Open Source', 'Gecko', 'Android', 'Free'] },
          { name: 'Fennec F-Droid', sources: [{type: 'website', url: 'https://f-droid.org/en/packages/org.mozilla.fennec_fdroid/'}, {type: 'fdroid', url: 'https://f-droid.org/en/packages/org.mozilla.fennec_fdroid/'}], imgId: imgIdCounter++, description: 'Fennec F-Droid is a build of Firefox for Android from the F-Droid project, with proprietary bits removed. It\'s a great choice for a de-googled browser experience.', tags: ['Open Source', 'Gecko', 'Android', 'Free'] },
          { name: 'Onion', sources: [{type: 'website', url: 'https://onionbrowser.com/'}, {type: 'appstore', url: 'https://apps.apple.com/us/app/onion-browser/id519296448'}, {type: 'github', url: 'https://github.com/OnionBrowser/OnionBrowser'}], imgId: imgIdCounter++, description: `Onion Browser is an unofficial Tor Browser application for iOS. Due to iOS limitations, it should not be considered as safe as the official Tor Browser, though it still offers users a layer of anonymity.`, tags: ['Open Source', 'iOS'] },
          { name: 'uBlock Origin', sources: [{type: 'website', url: 'https://ublockorigin.com/'}, {type: 'github', url: 'https://github.com/gorhill/uBlock'}, {type: 'chrome', url: 'https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm'}, {type: 'firefox', url: 'https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/'}], imgId: imgIdCounter++, description: `The king of browser extensions. Just installing it will make any browser far more private & secure, and you can customize it to your heart's content. Install UBO in any browser for yourself or a loved one to make an immediate impact on their safety (and sanity!) online.`, tags: ['Open Source', 'Web Extension', 'Free'] },
          { name: 'uBlock Origin Lite', sources: [{type: 'website', url: 'https://github.com/gorhill/uBlock/wiki/uBlock-Origin-Lite:-a-full-featured-MV3-blocker'}, {type: 'chrome', url: 'https://chromewebstore.google.com/detail/ublock-origin-lite/ddkjiahejlhfcafbddmgiahcphecmpfh'}], imgId: imgIdCounter++, description: `The (lite) king of browser extensions based on Manifest V3 for Chrome & Safari. Just installing it will make any browser far more private & secure. The lite version is designed for browsers where full-fledged UBO (Manifest V2) is no longer supported.`, tags: ['Open Source', 'Web Extension', 'Free'] },
          { name: 'AdGuard', sources: [{type: 'website', url: 'https://adguard.com/'}, {type: 'github', url: 'https://github.com/AdguardTeam/AdguardBrowserExtension'}, {type: 'chrome', url: 'https://chromewebstore.google.com/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg'}, {type: 'firefox', url: 'https://addons.mozilla.org/en-US/firefox/addon/adguard-adblocker/'}, {type: 'appstore', url: 'https://apps.apple.com/app/apple-store/id1047223162'}], imgId: imgIdCounter++, description: `For those using Safari, AdGuard is a great option to block ads, trackers, phishing, use custom DNS, and more.`, tags: ['Open Source', 'Web Extension', 'Free Tier'] },
        ],
      },
      {
        id: 'password-managers',
        title: 'Password Managers',
        icon: 'Lock',
        links: [
            { name: 'Bitwarden', sources: [{type: 'website', url: 'https://bitwarden.com/'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=com.x8bit.bitwarden'}, {type: 'fdroid', url: 'https://bitwarden.com/help/install-on-android/'}, {type: 'appstore', url: 'https://apps.apple.com/us/app/bitwarden-password-manager/id1137397744'}, {type: 'github', url: 'https://github.com/bitwarden'}, {type: 'chrome', url: 'https://chromewebstore.google.com/detail/bitwarden-free-password-m/nngceckbapebfimnlniiabkocgoklago'}, {type: 'firefox', url: 'https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager/'}], imgId: imgIdCounter++, description: `Bitwarden is a trusted, cloud-based option with zero-knowledge encryption to keep you safe. They offer an attractive experience for password management, with the option for self-hosting.`, tags: ['Open Source', 'Windows', 'MacOS', 'Linux', 'Android', 'iOS', 'Google Chrome', 'Firefox', 'Free Tier'] },
            { name: 'Proton Pass', sources: [{type: 'website', url: 'https://proton.me/pass'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=me.proton.android.pass'}, {type: 'appstore', url: 'https://apps.apple.com/app/proton-pass-password-manager/id6443461322'}, {type: 'github', url: 'https://github.com/ProtonMail/proton-pass'}, {type: 'chrome', url: 'https://chromewebstore.google.com/detail/proton-pass-free-password/ghmbeldphafepmbegfdlkgnpneadofim'}, {type: 'firefox', url: 'https://addons.mozilla.org/en-US/firefox/addon/proton-pass/'}], imgId: imgIdCounter++, description: `Proton Pass is a secure password manager integrated with the Proton ecosystem with an emphasis on a simple user experience. Its built-in email aliasing is an attractive feature, along with its UI/UX.`, tags: ['Open Source', 'Windows', 'MacOS', 'Linux', 'Android', 'iOS', 'Google Chrome', 'Firefox', 'Free Tier'] },
            { name: 'KeePassXC', sources: [{type: 'website', url: 'https://keepassxc.org/'}, {type: 'github', url: 'https://github.com/keepassxreboot/keepassxc'}], imgId: imgIdCounter++, description: `KeePassXC is a modern, secure, & customizable KeePass client available on all major desktop operating systems with active development.`, tags: ['Open Source', 'Windows', 'MacOS', 'Linux', 'Free'] },
            { name: 'KeePassDX', sources: [{type: 'website', url: 'https://www.keepassdx.com/'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=com.kunzisoft.keepass.free'}, {type: 'fdroid', url: 'https://f-droid.org/en/packages/com.kunzisoft.keepass.libre/'}, {type: 'github', url: 'https://github.com/Kunzisoft/KeePassDX'}], imgId: imgIdCounter++, description: `KeePassDX is a KeePass client for Android available on F-Droid and the Google Play Store with a modern interface, active development, and strong trust in the community.`, tags: ['Open Source', 'Android', 'Free'] },
            { name: 'KeePassium', sources: [{type: 'website', url: 'https://keepassium.com/'}, {type: 'appstore', url: 'https://apps.apple.com/app/keepassium-keepass-manager/id1435127111'}, {type: 'github', url: 'https://github.com/keepassium/KeePassium'}], imgId: imgIdCounter++, description: `KeePassium combines the security of KeePass with a clean intuitive design for iOS & MacOS. Since Strongbox's acquisition, many are migrating to KeePassium.`, tags: ['Open Source', 'MacOS', 'iOS', 'Free Tier'] },
            { name: 'KeePass', sources: [{type: 'website', url: 'https://keepass.info/'}, {type: 'github', url: 'https://sourceforge.net/projects/keepass/'}], imgId: imgIdCounter++, description: `KeePass is the original open source password manager that started it all, with local storage and strong encryption.`, tags: ['Open Source', 'Windows', 'MacOS', 'Linux', 'Free'] },
        ]
      },
      {
        id: 'two-fa',
        title: '2FA',
        icon: 'Shield',
        links: [
            { name: 'Aegis', sources: [{type: 'website', url: 'https://getaegis.app/'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=com.beemdevelopment.aegis'}, {type: 'fdroid', url: 'https://f-droid.org/packages/com.beemdevelopment.aegis/'}, {type: 'github', url: 'https://github.com/beemdevelopment/Aegis'}], imgId: imgIdCounter++, description: `Aegis is one of the most polished & simple TOTP services for Android. It's rich in features and has custom icon packs support.`, tags: ['Open Source', 'Android', 'Free'] },
            { name: 'Proton Auth', sources: [{type: 'website', url: 'https://proton.me/authenticator'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=me.proton.android.auth'}, {type: 'appstore', url: 'https://apps.apple.com/ch/app/proton-authenticator/id6475722339'}, {type: 'github', url: 'https://github.com/ProtonMail/proton-android-authenticator'}], imgId: imgIdCounter++, description: `Proton's E2EE 2FA app. A cross platform TOTP app with secure E2EE syncing on all major operating systems.`, tags: ['Open Source', 'Android', 'iOS', 'Free'] },
            { name: 'Ente Auth', sources: [{type: 'website', url: 'https://ente.io/auth/'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=io.ente.auth'}, {type: 'fdroid', url: 'https://f-droid.org/en/packages/io.ente.auth/'}, {type: 'appstore', url: 'https://apps.apple.com/us/app/ente-authenticator/id1656877233'}, {type: 'github', url: 'https://github.com/ente-io/auth'}], imgId: imgIdCounter++, description: `Ente's E2EE 2FA app. A cross platform TOTP app with secure E2EE syncing on all major operating systems.`, tags: ['Open Source', 'Android', 'iOS', 'Windows', 'MacOS', 'Linux', 'Free'] },
            { name: '2FAS Auth', sources: [{type: 'website', url: 'https://2fas.com/'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=com.twofas.android'}, {type: 'appstore', url: 'https://apps.apple.com/us/app/2fas-authenticator/id1552324355'}, {type: 'github', url: 'https://github.com/2FAS-Team'}, {type: 'chrome', url: 'https://chromewebstore.google.com/detail/2fas-browser-extension/icpgiogafbcpbgecfjbpbekafjpcbgac'}, {type: 'firefox', url: 'https://addons.mozilla.org/en-US/firefox/addon/2fas-browser-extension/'}], imgId: imgIdCounter++, description: `2FAS is one of the easiest way to enable 2FA to verify your identity and securely log in to accounts to keep your personal data and passwords protected from cyber threats — all from one app, 100% free!`, tags: ['Open Source', 'Android', 'iOS', 'Google Chrome', 'Firefox', 'Free'] },
            { name: 'Nitrokey', sources: [{type: 'website', url: 'https://www.nitrokey.com/'}], imgId: imgIdCounter++, description: `Nitrokey offers open source security hardware 'Made in Germany'. Nitrokeys protect cryptocurrencies, email accounts, servers, and your digital identity.`, tags: ['Open Source', 'Hardware'] },
            { name: 'SoloKeys', sources: [{type: 'website', url: 'https://solokeys.com/'}], imgId: imgIdCounter++, description: `SoloKeys provide affordable, open source U2F hardware.`, tags: ['Open Source', 'Hardware'] },
        ]
      },
      {
        id: 'encryption',
        title: 'Encryption',
        icon: 'Key',
        links: [
          { name: 'Veracrypt', sources: [{type: 'website', url: 'https://www.veracrypt.fr/'}, {type: 'github', url: 'https://github.com/veracrypt/VeraCrypt'}], imgId: imgIdCounter++, description: `Veracrypt offers users encrypted volumes, and on some operating systems full disk encryption. It is a great option for those needing robust security algorithms that are resistant to brute-force attacks.`, tags: ['Free', 'Open Source', 'Windows', 'MacOS', 'Linux'] },
          { name: 'Cryptomator', sources: [{type: 'website', url: 'https://cryptomator.org/'}, {type: 'github', url: 'https://github.com/cryptomator/cryptomator'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=org.cryptomator'}, {type: 'appstore', url: 'https://apps.apple.com/app/apple-store/id953086535'}, {type: 'fdroid', url: 'https://f-droid.org/en/packages/org.cryptomator/'}], imgId: imgIdCounter++, description: `Cryptomator allows users to encrypt their files before uploading them to another mainstream cloud provider (Google Drive, Dropbox, iCloud etc.) - it's a great way to still use the cloud provider of your choice with improved security.`, tags: ['Free Tier', 'Open Source', 'Android', 'iOS', 'Windows', 'MacOS', 'Linux'] },
          { name: 'GNUPG', sources: [{type: 'website', url: 'https://www.gnupg.org/'}, {type: 'github', url: 'https://dev.gnupg.org/source/gnupg/'}], imgId: imgIdCounter++, description: `GnuPG (GNU Privacy Guard) offers flexible encryption options across different mediums for users needing a more versatile option, at the cost of generally being more advanced.`, tags: ['Free', 'Open Source', 'MacOS', 'Linux'] },
          { name: '7-zip', sources: [{type: 'website', url: 'https://www.7-zip.org/'}, {type: 'github', url: 'https://sourceforge.net/projects/sevenzip/'}], imgId: imgIdCounter++, description: `7-Zip is an archiving tool with basic file encryption options. It is not as robust as the other options and should be used with caution for sensitive tasks.`, tags: ['Free', 'Open Source', 'Windows', 'MacOS', 'Linux'] },
        ]
      },
      { 
        id: 'firewalls', 
        title: 'Firewalls', 
        icon: 'Server', 
        links: [
            { name: 'Portmaster', sources: [{type: 'website', url: 'https://safing.io/'}, {type: 'github', url: 'https://github.com/safing/portmaster'}], imgId: imgIdCounter++, description: `Powerful (& beautiful) firewall program for Windows and Linux to give you finer control over what your device connects to and with a built in DoT (DNS-over-TLS) DNS Server Selector, where you can easily re-route all your dns queries to a DNS-over-TLS provider of your choice (like NextDNS, ControlD, Quad9, etc).`, tags: ['Free', 'Open Source', 'Windows', 'Linux'] },
            { name: 'Lulu', sources: [{type: 'website', url: 'https://objective-see.org/products/lulu.html'}, {type: 'github', url: 'https://github.com/objective-see/LuLu'}], imgId: imgIdCounter++, description: `Firewall program for MacOS to give you finer control over what your device connects to. Open source version of Little Snitch.`, tags: ['Free', 'Open Source', 'MacOS'] },
            { name: 'RethinkDNS', sources: [{type: 'website', url: 'https://rethinkdns.com/'}, {type: 'github', url: 'https://github.com/celzero/rethink-app'}, {type: 'fdroid', url: 'https://f-droid.org/en/packages/com.celzero.bravedns/'}], imgId: imgIdCounter++, description: `Block malware, spyware, ads, and trackers across all apps with Rethink DNS. Servers in 300+ locations: Experience Blazing fast speeds.`, tags: ['Free', 'Open Source', 'Android'] },
            { name: 'InviZible Pro', sources: [{type: 'website', url: 'https://invizible.net/en/'}, {type: 'fdroid', url: 'https://f-droid.org/packages/pan.alexander.tordnscrypt.stable/'}, {type: 'github', url: 'https://github.com/Gedsh/InviZible'}], imgId: imgIdCounter++, description: 'InviZible Pro is an all-in-one online privacy and security tool for Android. It brings the power of Tor, DNSCrypt, and I2P to your device to help you stay anonymous and secure.', tags: ['Open Source', 'Android', 'Free', 'Security']}
        ] 
      },
      { 
        id: 'app-stores', 
        title: 'App Stores & Sources', 
        icon: 'DownloadCloud', 
        links: [
          { name: 'F-Droid', sources: [{type: 'website', url: 'https://f-droid.org'}, {type: 'github', url: 'https://github.com/f-droid/fdroidclient'}], imgId: imgIdCounter++, description: `F-Droid is the go-to FOSS app store for all Android devices. It is recommended to use a F-Droid client (like Neo Store or Droid-ify) instead of using the official app for security reasons.`, tags: ['Free', 'Open Source', 'App Repository'] },
          { name: 'Aurora Store', sources: [{type: 'website', url: 'https://auroraoss.com/'}, {type: 'gitlab', url: 'https://gitlab.com/AuroraOSS/AuroraStore'}], imgId: imgIdCounter++, description: `Aurora Store allows users to download apps directly from the Google Play Store without a Gmail safely and has built-in Exodus Privacy Reports.`, tags: ['Free', 'Open Source', 'Android', 'App Store'] },
          { name: 'Obtainium', sources: [{type: 'website', url: 'https://obtainium.imranr.dev/'}, {type: 'github', url: 'https://github.com/ImranR98/Obtainium'}], imgId: imgIdCounter++, description: `Obtainium enables you to install and update apps directly from the source repository (like Github, GitLab, Codeberg, etc).`, tags: ['Free', 'Open Source', 'Android', 'App Installer', 'App Updater'] },
          { name: 'Exodus Privacy', sources: [{type: 'website', url: 'https://reports.exodus-privacy.eu.org/en/'}, {type: 'github', url: 'https://github.com/Exodus-Privacy/exodus-website'}], imgId: imgIdCounter++, description: `Analyzes privacy concerns in Android applications. Many iOS applications will use similar trackers, so this is a useful tool to check trackers for applications before downloading.`, tags: ['Free', 'Open Source', 'Online', 'Trackers Analyzer'] },
          { name: 'AltStore', sources: [{type: 'website', url: 'https://altstore.io/'}, {type: 'github', url: 'https://github.com/altstoreio/AltStore'}], imgId: imgIdCounter++, description: `AltStore allows iOS users to install IPA files (apps) to their device without the iOS App Store. Apple's restrictions, however, make this a generally limited experience. Europeans can install AltStore PAL for an improved sideloading experience.`, tags: ['Free', 'Open Source', 'iOS', 'App Store'] }
        ] 
      },
       {
        id: 'utilities',
        title: 'Utilities',
        icon: 'Tool',
        links: [
          { name: 'Shelter', sources: [{type: 'website', url: 'https://github.com/PeterCxy/Shelter'}, {type: 'fdroid', url: 'https://f-droid.org/packages/net.typeblog.shelter/'}, {type: 'github', url: 'https://github.com/PeterCxy/Shelter'}], imgId: imgIdCounter++, description: 'Shelter is a Free and Open-Source application that leverages the "Work Profile" feature of Android to provide an isolated space where you can install or clone apps.', tags: ['Open Source', 'Android', 'Free', 'Sandbox'] },
          { name: 'DAVx⁵', sources: [{type: 'website', url: 'https://www.davx5.com/'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=at.bitfire.davx5'}, {type: 'fdroid', url: 'https://f-droid.org/en/packages/at.bitfire.davx5/'}, {type: 'github', url: 'https://github.com/bitfireAT/davx5-ose'}], imgId: imgIdCounter++, description: 'DAVx⁵ is an all-in-one app for syncing your contacts (CardDAV), calendars (CalDAV) and tasks (based on VTODO). The app is easy to set up and integrates perfectly with your favorite calendar/contacts app.', tags: ['Open Source', 'Android', 'Free', 'Sync'] },
          { name: 'Etar', sources: [{type: 'website', url: 'https://github.com/Etar-Group/Etar-Calendar'}, {type: 'fdroid', url: 'https://f-droid.org/en/packages/ws.xsoh.etar/'}, {type: 'github', url: 'https://github.com/Etar-Group/Etar-Calendar'}], imgId: imgIdCounter++, description: 'Etar is a simple, material-designed, open source calendar for Android that can sync with various services via CalDAV.', tags: ['Open Source', 'Android', 'Free', 'Calendar'] },
          { name: 'Simple Mobile Tools', sources: [{type: 'website', url: 'https://www.simplemobiletools.com/'}, {type: 'playstore', url: 'https://play.google.com/store/apps/dev?id=9070296388022589266'}, {type: 'fdroid', url: 'https://f-droid.org/en/packages/com.simplemobiletools.gallery.pro/'}, {type: 'github', url: 'https://github.com/SimpleMobileTools'}], imgId: imgIdCounter++, description: 'A group of simple, open source, ad-free Android apps with customizable widgets, without unnecessary permissions. The suite includes a gallery, calendar, contacts, file manager, and more.', tags: ['Open Source', 'Android', 'Free', 'Utilities'] },
          { name: 'NewPipe', sources: [{type: 'website', url: 'https://newpipe.net/'}, {type: 'fdroid', url: 'https://f-droid.org/packages/org.schabi.newpipe/'}, {type: 'github', url: 'https://github.com/TeamNewPipe/NewPipe'}], imgId: imgIdCounter++, description: 'NewPipe is a lightweight, open source YouTube client for Android. It doesn\'t use any Google framework libraries or the YouTube API, allowing you to use it on devices without Google Services.', tags: ['Open Source', 'Android', 'Free', 'YouTube'] },
          { name: 'LibreTube', sources: [{type: 'website', url: 'https://github.com/libre-tube/LibreTube'}, {type: 'fdroid', url: 'https://f-droid.org/packages/com.github.libretube/'}, {type: 'github', url: 'https://github.com/libre-tube/LibreTube'}], imgId: imgIdCounter++, description: 'LibreTube is an alternative YouTube front-end for Android, based on Piped. It offers a modern interface and many features without needing Google Services.', tags: ['Open Source', 'Android', 'Free', 'YouTube'] },
          { name: 'Feeder', sources: [{type: 'website', url: 'https://gitlab.com/spacecowboy/Feeder'}, {type: 'fdroid', url: 'https://f-droid.org/en/packages/com.nononsenseapps.feeder/'}, {type: 'gitlab', url: 'https://gitlab.com/spacecowboy/Feeder'}], imgId: imgIdCounter++, description: 'Feeder is a free and open source RSS feed reader for Android. It supports all common feed formats and offers a clean, simple user interface.', tags: ['Open Source', 'Android', 'Free', 'RSS'] },
          { name: 'Gcam Services Provider', sources: [{type: 'website', url: 'https://github.com/lukaspieper/Gcam-Services-Provider'}, {type: 'github', url: 'https://github.com/lukaspieper/Gcam-Services-Provider'}], imgId: imgIdCounter++, description: 'Gcam Services Provider is a minimal replacement for Google Play Services, allowing Google Camera to work on devices without Google Services installed.', tags: ['Open Source', 'Android', 'Free', 'Camera'] },
        ]
      }
    ]
  },
  {
    id: 'operating-systems',
    title: 'Operating Systems',
    icon: 'HardDrive',
    subCategories: [
      { 
        id: 'desktop', 
        title: 'Desktop', 
        icon: 'Monitor', 
        links: [
            { name: 'Fedora', sources: [{type: 'website', url: 'https://fedoraproject.org/'}, {type: 'gitlab', url: 'https://pagure.io/fedora-workstation'}], imgId: imgIdCounter++, description: `Fedora Workstation / KDE Plasma both has strong out-of-the-box privacy & security practices, all backed by Red Hat Enterprise Linux; a trustworthy and commited team.`, tags: ['Free', 'Open Source', 'Linux', 'Moderate'] },
            { name: 'ZorinOS', sources: [{type: 'website', url: 'https://zorin.com/os/'}, {type: 'github', url: 'https://github.com/ZorinOS'}], imgId: imgIdCounter++, description: `ZorinOS is based on Ubuntu Linux. It's designed for familiar user experience, mimicking Windows or macOS, supports dual-boot, runs Windows apps via WINE, pre-installed essential software, customizable desktop layouts, broad hardware compatibility, and privacy-focused updates.`, tags: ['Free', 'Open Source', 'Linux', 'Beginner'] },
            { name: 'PopOS', sources: [{type: 'website', url: 'https://system76.com/pop/'}, {type: 'github', url: 'https://github.com/pop-os'}], imgId: imgIdCounter++, description: `Pop!_OS is also based on Ubuntu Linux. It's an operating system for STEM and creative professionals who use their computer as a tool to discover and create.`, tags: ['Free', 'Open Source', 'Linux', 'Beginner'] }
        ] 
      },
      { 
        id: 'android', 
        title: 'Android', 
        icon: 'Smartphone', 
        links: [
            { name: 'GrapheneOS', sources: [{type: 'website', url: 'https://grapheneos.org/'}, {type: 'github', url: 'https://github.com/GrapheneOS'}], imgId: imgIdCounter++, description: `GrapheneOS is a privacy and security hardened fork of Android. It is one of the most respected projects for its security innovations, and is a fantastic choice for those wanting to de-google while maintaining a high security standard.`, tags: ['Free', 'Open Source', 'Android', 'Advanced'] },
            { name: 'CalyxOS', sources: [{type: 'website', url: 'https://calyxos.org/'}, {type: 'gitlab', url: 'https://gitlab.com/CalyxOS'}], imgId: imgIdCounter++, description: `CalyxOS is a privacy and security hardened fork of Android that includes the option for microG, a FOSS re-implementation of Google's proprietary core libraries & applications.`, tags: ['Free', 'Open Source', 'Android', 'Moderate'] },
            { name: 'DivestOS', sources: [{type: 'website', url: 'https://divestos.org/'}, {type: 'gitlab', url: 'https://gitlab.com/divestos'}], imgId: imgIdCounter++, description: `DivestOS is a privacy and security hardened fork of LineageOS. It supports a wide variety of devices, many of them older, and also includes the option for microG.`, tags: ['Free', 'Open Source', 'Android', 'Advanced'] }
        ] 
      },
    ]
  },
  {
    id: 'content-creators',
    title: 'Content Creators',
    icon: 'Users',
    subCategories: [
      {
        id: 'youtube-creators',
        title: 'YouTube',
        icon: 'Youtube',
        links: [
          { name: 'The Hated One', sources: [{type: 'youtube', url: 'https://www.youtube.com/channel/UCt4-n_pP_v4a-25wARlT_iQ'}], imgId: imgIdCounter++, description: `The Hated One offers a good balance of privacy & security news, mixed with tutorials, presented in an easy-to-digest format.`, tags: ['YouTube', 'News', 'Tutorials'] },
          { name: 'Techlore', sources: [{type: 'youtube', url: 'https://www.youtube.com/channel/UCs6KfncB4I9dLGb-MO_oG2A'}, {type: 'website', url: 'https://techlore.tech'}], imgId: imgIdCounter++, description: `Techlore offers high-quality videos and content for all experience levels, covering a wide variety of topics.`, tags: ['YouTube', 'Tutorials'] },
          { name: 'Sun Knudsen', sources: [{type: 'youtube', url: 'https://www.youtube.com/c/SunKnudsen'}], imgId: imgIdCounter++, description: `Sun Knudsen offers tutorials, typically geared to a more advanced audience.`, tags: ['YouTube', 'Tutorials'] },
          { name: 'Mental Outlaw', sources: [{type: 'youtube', url: 'https://www.youtube.com/c/MentalOutlaw'}], imgId: imgIdCounter++, description: `Mental Outlaw offers a different take on privacy & security news, with a heavy emphasis on Linux.`, tags: ['YouTube', 'News', 'Linux'] }
        ]
      },
      {
        id: 'podcast-creators',
        title: 'Podcasts',
        icon: 'Mic',
        links: [
          { name: 'Surveillance Report', sources: [{type: 'website', url: 'https://techlore.tech/sr.html'}], imgId: imgIdCounter++, description: `A weekly podcast covering the latest privacy & security news, hosted by Techlore & The New Oil.`, tags: ['Podcast', 'News'] },
          { name: 'Opt Out', sources: [{type: 'website', url: 'https://optoutpod.com/'}], imgId: imgIdCounter++, description: `A podcast that interviews many different individuals in the privacy space. A good way to learn about the people behind the projects.`, tags: ['Podcast', 'Interviews'] }
        ]
      },
      {
        id: 'blog-creators',
        title: 'Blogs & Websites',
        icon: 'BookOpen',
        links: [
          { name: 'Privacy Guides', sources: [{type: 'website', url: 'https://www.privacyguides.org/'}, {type: 'github', url: 'https://github.com/privacyguides'}], imgId: imgIdCounter++, description: `Privacy Guides offers in-depth resources and recommendations for all things privacy.`, tags: ['Blog', 'Guides', 'Recommendations'] },
          { name: 'The New Oil', sources: [{type: 'website', url: 'https://thenewoil.org/'}], imgId: imgIdCounter++, description: `The New Oil offers a large selection of easy-to-digest blogs, covering a wide array of topics.`, tags: ['Blog', 'Guides'] }
        ]
      }
    ]
  },
  {
    id: 'other-services',
    title: 'Other Services',
    icon: 'Grid',
    subCategories: [
      {
        id: 'search-engines',
        title: 'Search Engines',
        icon: 'Search',
        links: [
          { name: 'Brave Search', sources: [{type: 'website', url: 'https://search.brave.com/'}, {type: 'github', url: 'https://github.com/brave/search'}], imgId: imgIdCounter++, description: 'Brave Search is a privacy-respecting search engine from the creators of the Brave Browser. It uses its own independent index and does not track users, searches, or clicks.', tags: ['Free Tier', 'Search Engine'] },
          { name: 'Startpage', sources: [{type: 'website', url: 'https://www.startpage.com/'}], imgId: imgIdCounter++, description: 'Startpage provides Google search results with complete privacy. It acts as a proxy, so your IP address and personal information are never shared with Google.', tags: ['Free', 'Search Engine'] },
          { name: 'DuckDuckGo', sources: [{type: 'website', url: 'https://duckduckgo.com/'}, {type: 'github', url: 'https://github.com/duckduckgo'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=com.duckduckgo.mobile.android'}, {type: 'appstore', url: 'https://apps.apple.com/us/app/duckduckgo-privacy-browser/id663592361'}], imgId: imgIdCounter++, description: 'DuckDuckGo is a popular privacy-focused search engine that emphasizes protecting searchers\' privacy and avoiding the filter bubble of personalized search results.', tags: ['Free', 'Search Engine', 'Android', 'iOS'] },
          { name: 'SearXNG', sources: [{type: 'website', url: 'https://docs.searxng.org/'}, {type: 'github', url: 'https://github.com/searxng/searxng'}], imgId: imgIdCounter++, description: 'SearXNG is a free and open-source metasearch engine, aggregating the results of other search engines while not storing information about its users. It is highly customizable and can be self-hosted.', tags: ['Free', 'Open Source', 'Search Engine', 'Self-Hosted'] },
          { name: 'Whoogle', sources: [{type: 'website', url: 'https://github.com/benbusby/whoogle-search'}, {type: 'github', url: 'https://github.com/benbusby/whoogle-search'}], imgId: imgIdCounter++, description: 'Whoogle Search is a self-hosted, ad-free, privacy-respecting metasearch engine that gets its results from Google, but without any of the tracking or ads.', tags: ['Free', 'Open Source', 'Search Engine', 'Self-Hosted'] },
        ]
      },
      {
        id: 'vpns',
        title: 'VPNs',
        icon: 'WifiOff',
        links: [
          { name: 'Mullvad VPN', sources: [{type: 'website', url: 'https://mullvad.net/'}, {type: 'github', url: 'https://github.com/mullvad/mullvadvpn-app'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=net.mullvad.mullvadvpn'}, {type: 'appstore', url: 'https://apps.apple.com/us/app/mullvad-vpn/id1488466513'}], imgId: imgIdCounter++, description: 'Mullvad is a highly-respected VPN service based in Sweden, known for its strong privacy policies, anonymous account creation, and commitment to open source.', tags: ['Open Source', 'VPN', 'Windows', 'MacOS', 'Linux', 'Android', 'iOS'] },
          { name: 'IVPN', sources: [{type: 'website', url: 'https://www.ivpn.net/'}, {type: 'github', url: 'https://github.com/ivpn'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=net.ivpn.client'}, {type: 'appstore', url: 'https://apps.apple.com/us/app/ivpn-vpn-proxy/id1112426283'}], imgId: imgIdCounter++, description: 'IVPN is a privacy-focused VPN provider that offers open-source clients, a strict no-logging policy, and features like multi-hop and an anti-tracking system.', tags: ['Open Source', 'VPN', 'Windows', 'MacOS', 'Linux', 'Android', 'iOS'] },
          { name: 'ProtonVPN', sources: [{type: 'website', url: 'https://protonvpn.com/'}, {type: 'github', url: 'https://github.com/ProtonVPN'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=ch.protonvpn.android'}, {type: 'appstore', url: 'https://apps.apple.com/us/app/proton-vpn-fast-secure/id1437005085'}], imgId: imgIdCounter++, description: 'From the creators of Proton Mail, ProtonVPN is a high-speed Swiss VPN that safeguards your privacy. It offers a free tier, strong encryption, and a strict no-logs policy.', tags: ['Open Source', 'VPN', 'Windows', 'MacOS', 'Linux', 'Android', 'iOS', 'Free Tier'] },
        ]
      },
      {
        id: 'aliasing',
        title: 'Aliasing',
        icon: 'Mail',
        links: [
          { name: 'SimpleLogin', sources: [{type: 'website', url: 'https://simplelogin.io/'}, {type: 'github', url: 'https://github.com/simple-login'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=io.simplelogin.android'}, {type: 'appstore', url: 'https://apps.apple.com/app/simplelogin-anti-spam-email/id1494359858'}], imgId: imgIdCounter++, description: 'SimpleLogin (by Proton) is an open-source email aliasing service that allows you to create unique email aliases to protect your real email address from spam and tracking.', tags: ['Open Source', 'Aliasing', 'Android', 'iOS', 'Web Extension', 'Free Tier'] },
          { name: 'addy.io', sources: [{type: 'website', url: 'https://addy.io/'}, {type: 'github', url: 'https://github.com/anonaddy/anonaddy'}, {type: 'fdroid', url: 'https://f-droid.org/en/packages/com.anonaddy.client/'}], imgId: imgIdCounter++, description: 'addy.io (formerly AnonAddy) is an open-source anonymous email forwarding service that helps protect your primary email address. It offers browser extensions and a generous free tier.', tags: ['Open Source', 'Aliasing', 'Android', 'Web Extension', 'Free Tier'] },
          { name: 'DuckDuckGo Email Protection', sources: [{type: 'website', url: 'https://duckduckgo.com/email/'}], imgId: imgIdCounter++, description: 'A free email forwarding service that removes trackers from your emails and lets you create unique, private email addresses on the fly.', tags: ['Free', 'Aliasing', 'Web Extension'] },
          { name: 'Firefox Relay', sources: [{type: 'website', url: 'https://relay.firefox.com/'}, {type: 'github', url: 'https://github.com/mozilla/fx-private-relay'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=org.mozilla.relay'}, {type: 'appstore', url: 'https://apps.apple.com/app/firefox-relay/id1624639903'}], imgId: imgIdCounter++, description: 'Firefox Relay provides email masks to hide your real email address. It forwards messages from your masks to your real inbox and blocks spam.', tags: ['Open Source', 'Aliasing', 'Android', 'iOS', 'Web Extension', 'Free Tier'] },
        ]
      },
      {
        id: 'cloud-storage',
        title: 'Cloud Storage',
        icon: 'Cloud',
        links: [
          { name: 'Proton Drive', sources: [{type: 'website', url: 'https://proton.me/drive'}, {type: 'github', url: 'https://github.com/ProtonMail/proton-drive-android'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=me.proton.android.drive'}, {type: 'appstore', url: 'https://apps.apple.com/us/app/proton-drive-private-cloud/id1563632938'}], imgId: imgIdCounter++, description: 'Proton Drive is an end-to-end encrypted cloud storage service that keeps your files private and secure. It is part of the Proton ecosystem of privacy services.', tags: ['Open Source', 'Cloud Storage', 'Android', 'iOS', 'Windows', 'MacOS', 'Free Tier'] },
          { name: 'Filen', sources: [{type: 'website', url: 'https://filen.io/'}, {type: 'github', url: 'https://github.com/filen-cloud'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=io.filen.app'}, {type: 'appstore', url: 'https://apps.apple.com/app/filen/id1605380126'}], imgId: imgIdCounter++, description: 'Filen offers zero-knowledge, end-to-end encrypted cloud storage based in Germany. They provide a generous free plan and focus on user privacy and data security.', tags: ['Open Source', 'Cloud Storage', 'Android', 'iOS', 'Windows', 'MacOS', 'Linux', 'Free Tier'] },
          { name: 'Nextcloud', sources: [{type: 'website', url: 'https://nextcloud.com/'}, {type: 'github', url: 'https://github.com/nextcloud'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=com.nextcloud.client'}, {type: 'appstore', url: 'https://apps.apple.com/us/app/nextcloud/id1125420102'}], imgId: imgIdCounter++, description: 'Nextcloud is a suite of client-server software for creating and using file hosting services. It is free and open-source, allowing anyone to install and operate it on a private server.', tags: ['Open Source', 'Cloud Storage', 'Self-Hosted', 'Android', 'iOS', 'Windows', 'MacOS', 'Linux'] },
          { name: 'Mega', sources: [{type: 'website', url: 'https://mega.io/'}, {type: 'github', url: 'https://github.com/meganz'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=mega.privacy.android.app'}, {type: 'appstore', url: 'https://apps.apple.com/us/app/mega/id706857885'}], imgId: imgIdCounter++, description: 'Mega provides user-controlled encrypted cloud storage with a generous free tier. All files are encrypted on the client side before being uploaded.', tags: ['Open Source', 'Cloud Storage', 'Android', 'iOS', 'Windows', 'MacOS', 'Linux', 'Free Tier'] },
        ]
      },
      {
        id: 'crypto',
        title: 'Crypto Wallet & Exchanges',
        icon: 'DollarSign',
        links: [
          { name: 'Cake Wallet', sources: [{type: 'website', url: 'https://cakewallet.com/'}, {type: 'github', url: 'https://github.com/cake-tech/cake_wallet'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=com.cakewallet.cake_wallet'}, {type: 'appstore', url: 'https://apps.apple.com/us/app/cake-wallet-for-xmr-btc/id1334702542'}], imgId: imgIdCounter++, description: 'Cake Wallet is an open-source, multi-currency wallet that allows you to securely store, send, receive, and exchange your crypto. It places a strong emphasis on privacy, especially for Monero (XMR).', tags: ['Open Source', 'Crypto', 'Android', 'iOS', 'MacOS', 'Linux'] },
          { name: 'Monero GUI Wallet', sources: [{type: 'website', url: 'https://www.getmonero.org/downloads/'}, {type: 'github', url: 'https://github.com/monero-project/monero-gui'}], imgId: imgIdCounter++, description: 'The official open-source graphical user interface (GUI) wallet for Monero, a privacy-centric cryptocurrency. It allows you to manage your XMR securely on your desktop.', tags: ['Open Source', 'Crypto', 'Windows', 'MacOS', 'Linux'] },
          { name: 'Samourai Wallet', sources: [{type: 'website', url: 'https://samouraiwallet.com/'}, {type: 'github', url: 'https://github.com/Samourai-Wallet/samourai-wallet-android'}], imgId: imgIdCounter++, description: 'A privacy-focused Bitcoin wallet for Android that offers advanced features like Tor support, STONEWALL, and Stowaway to enhance transaction anonymity.', tags: ['Open Source', 'Crypto', 'Android'] },
          { name: 'Bisq', sources: [{type: 'website', url: 'https://bisq.network/'}, {type: 'github', url: 'https://github.com/bisq-network/bisq'}], imgId: imgIdCounter++, description: 'Bisq is a peer-to-peer, decentralized, and open-source exchange for cryptocurrencies. It allows users to trade crypto without relying on a central authority, enhancing privacy and security.', tags: ['Open Source', 'Crypto', 'Exchange', 'Windows', 'MacOS', 'Linux'] },
          { name: 'LocalMonero', sources: [{type: 'website', url: 'https://localmonero.co/'}], imgId: imgIdCounter++, description: 'A peer-to-peer trading platform for Monero (XMR). It allows users to buy and sell Monero directly with each other, using various payment methods, without the need for a traditional exchange.', tags: ['Crypto', 'Exchange'] },
          { name: 'TradeOgre', sources: [{type: 'website', url: 'https://tradeogre.com/'}], imgId: imgIdCounter++, description: 'A simple, no-frills cryptocurrency exchange that focuses on privacy coins and does not require KYC (Know Your Customer) verification.', tags: ['Crypto', 'Exchange'] },
        ]
      },
      {
        id: 'dns',
        title: 'DNS Providers',
        icon: 'Globe',
        links: [
          { name: 'NextDNS', sources: [{type: 'website', url: 'https://nextdns.io/'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=io.nextdns.NextDNS'}, {type: 'appstore', url: 'https://apps.apple.com/us/app/nextdns/id1463342498'}], imgId: imgIdCounter++, description: 'A modern, customizable DNS service that blocks ads, trackers, and malicious websites across all your devices. It offers a powerful and user-friendly interface with detailed analytics.', tags: ['DNS', 'Free Tier', 'Android', 'iOS', 'Windows', 'MacOS', 'Linux'] },
          { name: 'ControlD', sources: [{type: 'website', url: 'https://controld.com/'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=com.controld.mobile'}, {type: 'appstore', url: 'https://apps.apple.com/us/app/controld-utility/id1592323334'}], imgId: imgIdCounter++, description: 'ControlD is a highly configurable DNS service that allows you to block content, bypass geo-restrictions, and improve your privacy online. It comes from the makers of Windscribe VPN.', tags: ['DNS', 'Free Tier', 'Android', 'iOS'] },
          { name: 'Quad9', sources: [{type: 'website', url: 'https://quad9.net/'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=net.quad9.android'}], imgId: imgIdCounter++, description: 'A free, recursive, anycast DNS platform that provides end users with robust security protections, high-performance, and privacy. It blocks lookups of malicious host names from an up-to-the-minute list of threats.', tags: ['DNS', 'Free', 'Android'] },
          { name: 'Mullvad DNS', sources: [{type: 'website', url: 'https://mullvad.net/en/features/dns-over-https-and-dns-over-tls'}], imgId: imgIdCounter++, description: 'A free, public DNS service from the creators of Mullvad VPN. It supports DNS over HTTPS (DoH) and DNS over TLS (DoT), blocks ads and trackers, and follows a strict no-logging policy.', tags: ['DNS', 'Free'] },
        ]
      },
      {
        id: 'email',
        title: 'Email Providers',
        icon: 'Inbox',
        links: [
          { name: 'Proton Mail', sources: [{type: 'website', url: 'https://proton.me/mail'}, {type: 'github', url: 'https://github.com/ProtonMail'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=ch.protonmail.android'}, {type: 'appstore', url: 'https://apps.apple.com/us/app/proton-mail-encrypted-email/id979659905'}], imgId: imgIdCounter++, description: 'A popular end-to-end encrypted email service based in Switzerland. It offers a secure and private alternative to traditional email providers, with a focus on user privacy and data security.', tags: ['Open Source', 'Email', 'Android', 'iOS', 'Free Tier'] },
          { name: 'Tutanota', sources: [{type: 'website', url: 'https://tutanota.com/'}, {type: 'github', url: 'https://github.com/tutao/tutanota'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=de.tutao.tutanota'}, {type: 'appstore', url: 'https://apps.apple.com/us/app/tutanota/id922429649'}], imgId: imgIdCounter++, description: 'An open-source end-to-end encrypted email service based in Germany. Tutanota encrypts the entire mailbox, including the subject line and contacts, to ensure maximum privacy.', tags: ['Open Source', 'Email', 'Android', 'iOS', 'Windows', 'MacOS', 'Linux', 'Free Tier'] },
          { name: 'Skiff Mail', sources: [{type: 'website', url: 'https://skiff.com/mail'}, {type: 'github', url: 'https://github.com/skiff-org/skiff-mail'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=com.skiff.mail'}, {type: 'appstore', url: 'https://apps.apple.com/us/app/skiff-mail/id1594923129'}], imgId: imgIdCounter++, description: 'Skiff Mail is an end-to-end encrypted and decentralized email service. It offers a private, secure, and user-friendly experience, with features like aliases and a generous free tier.', tags: ['Open Source', 'Email', 'Android', 'iOS', 'Free Tier'] },
        ]
      },
      {
        id: 'messengers',
        title: 'Messengers',
        icon: 'MessageSquare',
        links: [
          { name: 'Signal', sources: [{type: 'website', url: 'https://signal.org/'}, {type: 'github', url: 'https://github.com/signalapp'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=org.thoughtcrime.securesms'}, {type: 'appstore', url: 'https://apps.apple.com/us/app/signal-private-messenger/id874139669'}], imgId: imgIdCounter++, description: 'Signal is a widely recommended private messenger that offers end-to-end encryption for all communications. It is open source and developed by a non-profit organization.', tags: ['Open Source', 'Messenger', 'Android', 'iOS', 'Windows', 'MacOS', 'Linux', 'Free'] },
          { name: 'Session', sources: [{type: 'website', url: 'https://getsession.org/'}, {type: 'github', url: 'https://github.com/oxen-io/session-android'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=network.loki.messenger'}, {type: 'appstore', url: 'https://apps.apple.com/app/session-private-messenger/id1470168868'}], imgId: imgIdCounter++, description: 'Session is an open-source, private messenger that offers end-to-end encryption and minimizes metadata. It does not require a phone number for registration, providing greater anonymity.', tags: ['Open Source', 'Messenger', 'Android', 'iOS', 'Windows', 'MacOS', 'Linux', 'Free'] },
          { name: 'SimpleX Chat', sources: [{type: 'website', url: 'https://simplex.chat/'}, {type: 'github', url: 'https://github.com/simplex-chat'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=chat.simplex.app'}, {type: 'appstore', url: 'https://apps.apple.com/us/app/simplex-chat-private-messenger/id1605731084'}], imgId: imgIdCounter++, description: 'SimpleX Chat is the first messenger that has no user identifiers of any kind. It is designed to be the most private and secure messaging platform, using its own decentralized protocol.', tags: ['Open Source', 'Messenger', 'Android', 'iOS', 'Linux', 'Free'] },
          { name: 'Briar', sources: [{type: 'website', url: 'https://briarproject.org/'}, {type: 'gitlab', url: 'https://code.briarproject.org/briar/briar'}, {type: 'fdroid', url: 'https://f-droid.org/en/packages/org.briarproject.briar.android/'}], imgId: imgIdCounter++, description: 'Briar is a peer-to-peer encrypted messaging app designed for activists, journalists, and anyone else who needs a safe, easy, and robust way to communicate. It can sync via Bluetooth or Wi-Fi in the absence of an internet connection.', tags: ['Open Source', 'Messenger', 'Android', 'Linux', 'Free'] },
        ]
      },
      {
        id: 'note-taking',
        title: 'Note Taking',
        icon: 'Edit',
        links: [
          { name: 'Standard Notes', sources: [{type: 'website', url: 'https://standardnotes.com/'}, {type: 'github', url: 'https://github.com/standardnotes'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=com.standardnotes'}, {type: 'appstore', url: 'https://apps.apple.com/us/app/standard-notes/id12 स्टैंडर्डnotes'}], imgId: imgIdCounter++, description: 'Standard Notes is a simple and private notes app that features end-to-end encryption, powerful extensions, and open-source clients. It is built on a philosophy of longevity and data portability.', tags: ['Open Source', 'Notes', 'Android', 'iOS', 'Windows', 'MacOS', 'Linux', 'Free Tier'] },
          { name: 'Joplin', sources: [{type: 'website', url: 'https://joplinapp.org/'}, {type: 'github', url: 'https://github.com/laurent22/joplin'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=net.cozic.joplin'}, {type: 'appstore', url: 'https://apps.apple.com/us/app/joplin/id1315596053'}], imgId: imgIdCounter++, description: 'Joplin is a free, open-source note-taking and to-do application, which can handle a large number of notes organized into notebooks. It supports Markdown, encryption, and syncing with various services.', tags: ['Open Source', 'Notes', 'Android', 'iOS', 'Windows', 'MacOS', 'Linux', 'Free'] },
          { name: 'Notesnook', sources: [{type: 'website', url: 'https://notesnook.com/'}, {type: 'github', url: 'https://github.com/streetwriters/notesnook'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=com.streetwriters.notesnook'}, {type: 'appstore', url: 'https://apps.apple.com/us/app/notesnook-private-notebook/id1544422204'}], imgId: imgIdCounter++, description: 'Notesnook is a free and open-source, private note-taking app. It offers end-to-end encryption by default and focuses on user privacy and data security.', tags: ['Open Source', 'Notes', 'Android', 'iOS', 'Windows', 'MacOS', 'Linux', 'Free Tier'] },
          { name: 'Skiff Pages', sources: [{type: 'website', url: 'https://skiff.com/pages'}, {type: 'github', url: 'https://github.com/skiff-org/skiff-pages'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=com.skiff.pages'}, {type: 'appstore', url: 'https://apps.apple.com/us/app/skiff-pages/id1601831512'}], imgId: imgIdCounter++, description: 'Skiff Pages is a collaborative, end-to-end encrypted, and decentralized document editor. It allows you to write and share documents privately.', tags: ['Open Source', 'Notes', 'Android', 'iOS', 'Free Tier'] },
        ]
      },
      {
        id: 'photo-gallery',
        title: 'Photo Gallery',
        icon: 'Image',
        links: [
          { name: 'Ente', sources: [{type: 'website', url: 'https://ente.io/'}, {type: 'github', url: 'https://github.com/ente-io'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=io.ente.photos'}, {type: 'appstore', url: 'https://apps.apple.com/app/ente-photos/id1538622525'}], imgId: imgIdCounter++, description: 'Ente is an open-source, end-to-end encrypted photo and video storage service. It provides a secure and private alternative to Google Photos or iCloud Photos.', tags: ['Open Source', 'Photos', 'Android', 'iOS', 'Free Tier'] },
          { name: 'Immich', sources: [{type: 'website', url: 'https://immich.app/'}, {type: 'github', url: 'https://github.com/immich-app/immich'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=app.alextran.immich'}, {type: 'appstore', url: 'https://apps.apple.com/us/app/immich/id1613945398'}], imgId: imgIdCounter++, description: 'Immich is a self-hosted, high-performance photo and video backup solution. It is open source and offers features like automatic backup, multi-user support, and object detection.', tags: ['Open Source', 'Photos', 'Self-Hosted', 'Android', 'iOS', 'Free'] },
          { name: 'Aves', sources: [{type: 'website', url: 'https://decker.pt/aves/'}, {type: 'github', url: 'https://github.com/deckerst/aves'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=deckers.thibault.aves'}, {type: 'fdroid', url: 'https://f-droid.org/packages/deckers.thibault.aves.libre/'}], imgId: imgIdCounter++, description: 'Aves is a beautiful, feature-rich, and open-source gallery and metadata explorer app for Android. It supports a wide range of file formats and offers advanced tagging and search capabilities.', tags: ['Open Source', 'Photos', 'Android', 'Free'] },
          { name: 'Les Pas', sources: [{type: 'website', url: 'https://github.com/scubajeff/lespas'}, {type: 'github', url: 'https://github.com/scubajeff/lespas'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=com.jeff.lespas'}, {type: 'fdroid', url: 'https://f-droid.org/en/packages/com.jeff.lespas.fdroid/'}], imgId: imgIdCounter++, description: 'Les Pas is a privacy-focused, open-source photo management app for Android. It allows you to create albums, edit photos, and sync them with a Nextcloud server for self-hosted backup.', tags: ['Open Source', 'Photos', 'Android', 'Free', 'Nextcloud'] },
        ]
      },
      {
        id: 'other-tools',
        title: 'Other Tools',
        icon: 'Tool',
        links: [
          { name: 'Bitwarden Send', sources: [{type: 'website', url: 'https://bitwarden.com/products/send/'}], imgId: imgIdCounter++, description: 'A feature of Bitwarden that allows you to securely transmit files and text to others. The information is end-to-end encrypted and can be configured to expire automatically.', tags: ['Secure Share', 'Free Tier'] },
          { name: 'OnionShare', sources: [{type: 'website', url: 'https://onionshare.org/'}, {type: 'github', url: 'https://github.com/onionshare/onionshare'}], imgId: imgIdCounter++, description: 'OnionShare is an open-source tool that lets you securely and anonymously share files, host websites, and chat with friends using the Tor network.', tags: ['Open Source', 'Secure Share', 'Tor', 'Windows', 'MacOS', 'Linux', 'Free'] },
          { name: 'Syncthing', sources: [{type: 'website', url: 'https://syncthing.net/'}, {type: 'github', url: 'https://github.com/syncthing/syncthing'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=com.nutomic.syncthingandroid'}], imgId: imgIdCounter++, description: 'Syncthing is a continuous file synchronization program. It synchronizes files between two or more computers in real time, safely protected from prying eyes. Your data is your data alone and you deserve to choose where it is stored.', tags: ['Open Source', 'Sync', 'Self-Hosted', 'Windows', 'MacOS', 'Linux', 'Android', 'Free'] },
          { name: 'KDE Connect', sources: [{type: 'website', url: 'https://kdeconnect.kde.org/'}, {type: 'gitlab', url: 'https://invent.kde.org/network/kdeconnect-kde'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=org.kde.kdeconnect_tp'}, {type: 'fdroid', url: 'https://f-droid.org/en/packages/org.kde.kdeconnect_tp/'}], imgId: imgIdCounter++, description: 'KDE Connect is a project that enables all your devices to communicate with each other. It provides features like file sharing, notification sync, and remote control between your phone and computer.', tags: ['Open Source', 'Sync', 'Utilities', 'Windows', 'MacOS', 'Linux', 'Android', 'iOS', 'Free'] },
        ]
      },
    ]
  }
];
