
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
          { name: 'Brave Browser', url: 'https://brave.com/', imgId: imgIdCounter++, description: `Brave attempts to offer a familiar browser experience with privacy & security by default. Brave does many neat things for users out-of-the-box, but apossible annoyance is the cryptocurrency features. <a href="https://github.com/MulesGaming/brave-debloatinator" class="text-primary hover:brightness-90" target="_blank" rel="noopener noreferrer">(Can be disabled by this script)</a>`, tags: ['Open Source', 'Chromium', 'Android', 'iOS', 'Windows', 'MacOS', 'Linux'], customIcon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAP+6SURBVHhe7J0FnF1Vde8P78zMNDP77L33XliQEAh3QRAUEFFExQv44kU8qPgiqIgoiKAgKIr4oiKKKOCu3At3QwhBCAkBk929d9/M7My8f86cmZ2Z2d2dARvO+zzPk5mdmZ3zTvfcc8/pCwaDwWAwGAxGo3lDZWZmYDAYDAaD0Vya2YDBYDAYDAaj0Vya2YDBYDAYDAaj0Vya2YDBYDAYDAaj0Vya2YDBYDAYDAaj0Vya2YDBYDAYDAaj0Vya2YDBYDAYDAaj0Vya2YDBYDAYDAaj0Vya2YDBYDAYDAaj0Vya2YDBYDAYDAaj0Vya2YDBYDAYDAaj0Vya2YDBYDAYDAaj0Vya2YDBYDAYDAaj0Vya2YDBYDAYDAaj0Vya2YDBYDAYDAaj0Vya2YDBYDAYDAaj0Vya2YDBYDAYDAaj0Vya2YDBYDAYDAaj0Vya2YDBYDAYDAaj0Vya2YDBYDAYDAaj0Vya2YDBYDAYDAaj0Vya2YDBYDAYDAaj0Vya2YDBYDAYDAaj0Vya2YDBYDAYDAaj0Vya2YDBYDAYDAaj0Vya2YDBYDAYDAaj0Vya2YDBYDAYDAaj0Vya2YDBYDAYDAaj0Vya2YDBYDAYDAaj0Vya2YDBYDAYDAaj0Vya2YDBYDAYDAaj0Vya2YDBYDAYDAaj0Vya2YDBYDAYDAaj0Vya2YDBYDAYDAaj0Vya2YDBYDAYDAaj0Vya2YDBYDAYDAaj0Vya2YDBYDAYDAaj0VzaqfS2pQYDAaDwWAwGo1dZgMGg8FgMBgMRqO5zWywYDAYDAaDwWhkNDMGGwaDwWAwGAxGozk1swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k0swGDwWAwGAxGo7k-uH6jV/Vj8j/rQAAAABJRU5ErkJggg==' },
          { name: 'Cromite', url: 'https://github.com/uazo/cromite', imgId: imgIdCounter++, description: `Cromite is a Chromium fork based on <a href="https://www.bromite.org/" class="text-primary hover:brightness-90" target="_blank" rel="noopener noreferrer">Bromite</a> with built-in support for ad blocking and an eye for privacy. It is currently supported on Android, Windows, & Linux.`, tags: ['Open Source', 'Chromium', 'Android', 'Windows'] },
          { name: 'LibreWolf', url: 'https://librewolf.net/', imgId: imgIdCounter++, description: `LibreWolf tackles most Firefox hardening out-of-the-box & does a decent job of maintaining security updates.`, tags: ['Open Source', 'Gecko', 'Windows', 'MacOS', 'Linux'] },
          { name: 'Mullvad Browser', url: 'https://mullvad.net/browser', imgId: imgIdCounter++, description: `Mullvad Browser offers a fantastic middle-ground between the strong protections of a hardened Firefox, and the advantages of Tor Browser for desktop. It's co-developed by Mullvad & the official Tor Project.`, tags: ['Open Source', 'Gecko', 'Windows', 'MacOS', 'Linux'] },
          { name: 'TOR Browser', url: 'https://www.torproject.org/', imgId: imgIdCounter++, description: `The Tor Browser is one of the safest browsing experiences by prioritizing anonymity & freedom of information above all else. It's one of the most effective and accessible anonymity tools.`, tags: ['Open Source', 'Gecko', 'Android', 'Windows', 'MacOS', 'Linux'] },
          { name: 'Onion Browser', url: 'https://onionbrowser.com/', imgId: imgIdCounter++, description: `Onion Browser is an unofficial Tor Browser application for iOS. Due to iOS limitations, it should not be considered as safe as the official Tor Browser, though it still offers users a layer of anonymity.`, tags: ['Open Source', 'iOS'] },
          { name: 'uBlock Origin', url: 'https://ublockorigin.com/', imgId: imgIdCounter++, description: `The king of browser extensions. Just installing it will make any browser far more private & secure, and you can customize it to your heart's content. Install UBO in any browser for yourself or a loved one to make an immediate impact on their safety (and sanity!) online.`, tags: ['Open Source', 'Web Extension', 'Free'] },
          { name: 'uBlock Origin Lite', url: 'https://chromewstore.google.com/detail/ublock-origin-lite/ddkjiahejlhfcafbddmgiahcphecmpfh', imgId: imgIdCounter++, description: `The (lite) king of browser extensions based on Manifest V3 for Chrome & Safari. Just installing it will make any browser far more private & secure. The lite version is designed for browsers where full-fledged UBO (Manifest V2) is no longer supported.`, tags: ['Open Source', 'Web Extension', 'Free'] },
          { name: 'AdGuard', url: 'https://adguard.com/', imgId: imgIdCounter++, description: `For those using Safari, AdGuard is a great option to block ads, trackers, phishing, use custom DNS, and more.`, tags: ['Open Source', 'Web Extension', 'Free Tier'] },
        ],
      },
      {
        id: 'password-managers',
        title: 'Password Managers',
        icon: 'Lock',
        links: [
            { name: 'Bitwarden', url: 'https://bitwarden.com/', imgId: imgIdCounter++, description: `Bitwarden is a trusted, cloud-based option with zero-knowledge encryption to keep you safe. They offer an attractive experience for password management, with the option for self-hosting.`, tags: ['Open Source', 'Windows', 'MacOS', 'Linux', 'Android', 'iOS', 'Google Chrome', 'Firefox', 'Free Tier'] },
            { name: 'Proton Pass', url: 'https://proton.me/pass', imgId: imgIdCounter++, description: `Proton Pass is a secure password manager integrated with the Proton ecosystem with an emphasis on a simple user experience. Its built-in email aliasing is an attractive feature, along with its UI/UX.`, tags: ['Open Source', 'Windows', 'MacOS', 'Linux', 'Android', 'iOS', 'Google Chrome', 'Firefox', 'Free Tier'] },
            { name: 'KeePassXC', url: 'https://keepassxc.org/', imgId: imgIdCounter++, description: `KeePassXC is a modern, secure, & customizable KeePass client available on all major desktop operating systems with active development.`, tags: ['Open Source', 'Windows', 'MacOS', 'Linux', 'Free'] },
            { name: 'KeePassDX', url: 'https://www.keepassdx.com/', imgId: imgIdCounter++, description: `KeePassDX is a KeePass client for Android available on F-Droid and the Google Play Store with a modern interface, active development, and strong trust in the community.`, tags: ['Open Source', 'Android', 'Free'] },
            { name: 'KeePassium', url: 'https://keepassium.com/', imgId: imgIdCounter++, description: `KeePassium combines the security of KeePass with a clean intuitive design for iOS & MacOS. Since Strongbox's acquisition, many are migrating to KeePassium.`, tags: ['Open Source', 'MacOS', 'iOS', 'Free Tier'] },
            { name: 'KeePass', url: 'https://keepass.info/', imgId: imgIdCounter++, description: `KeePass is the original open source password manager that started it all, with local storage and strong encryption.`, tags: ['Open Source', 'Windows', 'MacOS', 'Linux', 'Free'] },
        ]
      },
      {
        id: 'two-fa',
        title: '2FA',
        icon: 'Shield',
        links: [
            { name: 'Aegis', url: 'https://getaegis.app/', imgId: imgIdCounter++, description: `Aegis is one of the most polished & simple TOTP services for Android. It's rich in features and has custom icon packs support.`, tags: ['Open Source', 'Android', 'Free'] },
            { name: 'Proton Auth', url: 'https://proton.me/authenticator', imgId: imgIdCounter++, description: `Proton's E2EE 2FA app. A cross platform TOTP app with secure E2EE syncing on all major operating systems.`, tags: ['Open Source', 'Android', 'iOS', 'Free'] },
            { name: 'Ente Auth', url: 'https://ente.io/auth/', imgId: imgIdCounter++, description: `Ente's E2EE 2FA app. A cross platform TOTP app with secure E2EE syncing on all major operating systems.`, tags: ['Open Source', 'Android', 'iOS', 'Windows', 'MacOS', 'Linux', 'Free'] },
            { name: '2FAS Authenticator', url: 'https://2fas.com/', imgId: imgIdCounter++, description: `2FAS is one of the easiest way to enable 2FA to verify your identity and securely log in to accounts to keep your personal data and passwords protected from cyber threats — all from one app, 100% free!`, tags: ['Open Source', 'Android', 'iOS', 'Google Chrome', 'Firefox', 'Free'] },
            { name: 'Nitrokey', url: 'https://www.nitrokey.com/', imgId: imgIdCounter++, description: `Nitrokey offers open source security hardware 'Made in Germany'. Nitrokeys protect cryptocurrencies, email accounts, servers, and your digital identity.`, tags: ['Open Source', 'Hardware'] },
            { name: 'SoloKeys', url: 'https://solokeys.com/', imgId: imgIdCounter++, description: `SoloKeys provide affordable, open source U2F hardware.`, tags: ['Open Source', 'Hardware'] },
        ]
      },
      { id: 'encryption', title: 'Encryption', icon: 'Key', links: [] },
      { id: 'firewalls', title: 'Firewalls', icon: 'Server', links: [] },
      { id: 'app-stores', title: 'App Stores & Sources', icon: 'DownloadCloud', links: [] },
    ]
  },
  {
    id: 'operating-systems',
    title: 'Operating Systems',
    icon: 'HardDrive',
    subCategories: [
      { id: 'android', title: 'Android', icon: 'Smartphone', links: [] },
      { id: 'desktop', title: 'Desktop', icon: 'Monitor', links: [] },
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