import { type ResourceCategory } from './types';

let imgIdCounter = 1;

export const RESOURCES_DATA: ResourceCategory[] = [
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
          { name: 'LibreWolf', sources: [{type: 'website', url: 'https://librewolf.net/'}, {type: 'github', url: 'https://gitlab.com/librewolf-community'}], imgId: imgIdCounter++, description: `LibreWolf tackles most Firefox hardening out-of-the-box & does a decent job of maintaining security updates.`, tags: ['Open Source', 'Gecko', 'Windows', 'MacOS', 'Linux'] },
          { name: 'Mullvad', sources: [{type: 'website', url: 'https://mullvad.net/browser'}, {type: 'github', url: 'https://gitlab.torproject.org/tpo/applications/mullvad-browser'}], imgId: imgIdCounter++, description: `Mullvad Browser offers a fantastic middle-ground between the strong protections of a hardened Firefox, and the advantages of Tor Browser for desktop. It's co-developed by Mullvad & the official Tor Project.`, tags: ['Open Source', 'Gecko', 'Windows', 'MacOS', 'Linux'] },
          { name: 'TOR', sources: [{type: 'website', url: 'https://www.torproject.org/'}, {type: 'playstore', url: 'https://play.google.com/store/apps/details?id=org.torproject.android'}, {type: 'fdroid', url: 'https://guardianproject.info/fdroid/'}, {type: 'github', url: 'https://gitlab.torproject.org/tpo/applications/tor-browser'}], imgId: imgIdCounter++, description: `The Tor Browser is one of the safest browsing experiences by prioritizing anonymity & freedom of information above all else. It's one of the most effective and accessible anonymity tools.`, tags: ['Open Source', 'Gecko', 'Android', 'Windows', 'MacOS', 'Linux'] },
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
            { name: 'RethinkDNS', sources: [{type: 'website', url: 'https://rethinkdns.com/'}, {type: 'github', url: 'https://github.com/celzero/rethink-app'}, {type: 'fdroid', url: 'https://f-droid.org/en/packages/com.celzero.bravedns/'}], imgId: imgIdCounter++, description: `Block malware, spyware, ads, and trackers across all apps with Rethink DNS. Servers in 300+ locations: Experience Blazing fast speeds.`, tags: ['Free', 'Open Source', 'Android'] }
        ] 
      },
      { 
        id: 'app-stores', 
        title: 'App Stores & Sources', 
        icon: 'DownloadCloud', 
        links: [
          { name: 'F-Droid', sources: [{type: 'website', url: 'https://f-droid.org'}, {type: 'github', url: 'https://github.com/f-droid/fdroidclient'}], imgId: imgIdCounter++, description: `F-Droid is the go-to FOSS app store for all Android devices. It is recommended to use a F-Droid client (like Neo Store or Droid-ify) instead of using the official app for security reasons.`, tags: ['Free', 'Open Source', 'App Repository'] },
          { name: 'Aurora Store', sources: [{type: 'website', url: 'https://auroraoss.com/'}, {type: 'github', url: 'https://github.com/whyorean/AuroraStore'}], imgId: imgIdCounter++, description: `Aurora Store allows users to download apps directly from the Google Play Store without a Gmail safely and has built-in Exodus Privacy Reports.`, tags: ['Free', 'Open Source', 'Android', 'App Store'] },
          { name: 'Obtainium', sources: [{type: 'website', url: 'https://obtainium.imranr.dev/'}, {type: 'github', url: 'https://github.com/ImranR98/Obtainium'}], imgId: imgIdCounter++, description: `Obtainium enables you to install and update apps directly from the source repository (like Github, GitLab, Codeberg, etc).`, tags: ['Free', 'Open Source', 'Android', 'App Installer', 'App Updater'] },
          { name: 'Exodus Privacy', sources: [{type: 'website', url: 'https://reports.exodus-privacy.eu.org/en/'}, {type: 'github', url: 'https://github.com/Exodus-Privacy/exodus-website'}], imgId: imgIdCounter++, description: `Analyzes privacy concerns in Android applications. Many iOS applications will use similar trackers, so this is a useful tool to check trackers for applications before downloading.`, tags: ['Free', 'Open Source', 'Online', 'Trackers Analyzer'] },
          { name: 'AltStore', sources: [{type: 'website', url: 'https://altstore.io/'}, {type: 'github', url: 'https://github.com/altstoreio/AltStore'}], imgId: imgIdCounter++, description: `AltStore allows iOS users to install IPA files (apps) to their device without the iOS App Store. Apple's restrictions, however, make this a generally limited experience. Europeans can install AltStore PAL for an improved sideloading experience.`, tags: ['Free', 'Open Source', 'iOS', 'App Store'] }
        ] 
      },
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
            { name: 'Fedora', sources: [{type: 'website', url: 'https://fedoraproject.org/'}], imgId: imgIdCounter++, description: `Fedora Workstation / KDE Plasma both has strong out-of-the-box privacy & security practices, all backed by Red Hat Enterprise Linux; a trustworthy and commited team.`, tags: ['Free', 'Open Source', 'Linux', 'Moderate'] },
            { name: 'ZorinOS', sources: [{type: 'website', url: 'https://zorin.com/os/'}], imgId: imgIdCounter++, description: `ZorinOS is based on Ubuntu Linux. It's designed for familiar user experience, mimicking Windows or macOS, supports dual-boot, runs Windows apps via WINE, pre-installed essential software, customizable desktop layouts, broad hardware compatibility, and privacy-focused updates.`, tags: ['Free', 'Open Source', 'Linux', 'Beginner'] },
            { name: 'PopOS', sources: [{type: 'website', url: 'https://system76.com/pop/'}, {type: 'github', url: 'https://github.com/pop-os'}], imgId: imgIdCounter++, description: `Pop!_OS is also based on Ubuntu Linux. It's an operating system for STEM and creative professionals who use their computer as a tool to discover and create.`, tags: ['Free', 'Open Source', 'Linux', 'Beginner'] }
        ] 
      },
      { id: 'android', title: 'Android', icon: 'Smartphone', links: [] },
    ]
  },
  {
    id: 'other-services',
    title: 'Other Services',
    icon: 'Grid',
    subCategories: [
      { id: 'search-engines', title: 'Search Engines', icon: 'Search', links: [] },
      { id: 'vpns', title: 'VPNs', icon: 'WifiOff', links: [] },
      { id: 'aliasing', title: 'Aliasing', icon: 'Mail', links: [] },
      { id: 'cloud-storage', title: 'Cloud Storage', icon: 'Cloud', links: [] },
      { id: 'crypto', title: 'Crypto Wallet & Exchanges', icon: 'DollarSign', links: [] },
      { id: 'dns', title: 'DNS Providers', icon: 'Globe', links: [] },
      { id: 'email', title: 'Email Providers', icon: 'Inbox', links: [] },
      { id: 'messengers', title: 'Messengers', icon: 'MessageSquare', links: [] },
      { id: 'note-taking', title: 'Note Taking', icon: 'Edit', links: [] },
      { id: 'photo-gallery', title: 'Photo Gallery', icon: 'Image', links: [] },
      { id: 'other-tools', title: 'Other Tools', icon: 'Tool', links: [] },
    ]
  }
];