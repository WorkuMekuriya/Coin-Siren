# Coin Siren - Next.js Website

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

Coin Siren is a Next.js website for [Question Link](https://www.figma.com/design/29huQtp3tx7aVzfKkjDb2n/Assignment-for-Coin-siren?node-id=0-1&node-type=canvas&t=xNZeKpKQx8K4GOQI-0).

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/WorkuMekuriya/Coin-Siren.git
   
2. Navigate to the project directory:
   ```bash 
   cd Coin-Siren
   
3. Install dependencies:
    ````bash
   npm install

        or
   
   yarn install

## Usage
 
1. Run in development mode
    ````bash
    yarn dev
    
        or
    
    npm run dev
   
2. Build for production
   ````bash
   yarn build

        or

   npm run build

3. Start for production

   ````bash
   yarn start

        or

   npm run start
   
## Folder Structure

````
coin-siren
    .
    ├── README.md
    ├── declarations.d.ts
    ├── next-env.d.ts
    ├── next.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    ├── public
    │   ├── favicon.ico
    │   └── images
    │       ├── avatar.png
    │       ├── flag.png
    │       ├── logo
    │       │   ├── dark.png
    │       │   └── light.png
    │       └── pattern.svg
    ├── src
    │   └── app
    │       ├── components
    │       │   ├── atoms
    │       │   │   ├── Avatar.tsx
    │       │   │   ├── ButtonIcon.tsx
    │       │   │   ├── Flag.tsx
    │       │   │   ├── InfoDetail.tsx
    │       │   │   ├── JobCard.tsx
    │       │   │   ├── LogoDark.tsx
    │       │   │   ├── LogoLight.tsx
    │       │   │   └── ServiceCard.tsx
    │       │   ├── molecules
    │       │   │   ├── BusinessDetails.tsx
    │       │   │   ├── DrawerButton.tsx
    │       │   │   ├── DropdownMenu.tsx
    │       │   │   ├── JobsCarousel.tsx
    │       │   │   ├── ServiceDetails.tsx
    │       │   │   └── UserCard.tsx
    │       │   ├── organisms
    │       │   │   ├── DesktopNav.tsx
    │       │   │   ├── Drawer.tsx
    │       │   │   └── UserCarousel.tsx
    │       │   ├── pages
    │       │   │   └── HomePage.tsx
    │       │   └── templates
    │       │       ├── Footer.tsx
    │       │       └── Header.tsx
    │       ├── fonts
    │       │   ├── Inter-Medium.ttf
    │       │   ├── Poppins-Black.ttf
    │       │   └── Pretendard-Bold.otf
    │       ├── globals.css
    │       ├── icons
    │       │   ├── ArrowDownIcon.svg
    │       │   ├── ArrowRightIcon.svg
    │       │   ├── BoxIcon.svg
    │       │   ├── CallIcon.svg
    │       │   ├── CaretDownIcon.svg
    │       │   ├── CaretLeftIcon.svg
    │       │   ├── CaretRightIcon.svg
    │       │   ├── CheckBoxIcon.svg
    │       │   ├── CloseIcon.svg
    │       │   ├── CodeIcon.svg
    │       │   ├── DollarIcon.svg
    │       │   ├── HamburgerIcon.svg
    │       │   ├── ImageIcon.svg
    │       │   ├── KorIcon.svg
    │       │   ├── MarketingIcon.svg
    │       │   ├── PresentationIcon.svg
    │       │   ├── SettingIcon.svg
    │       │   ├── TargetIcon.svg
    │       │   └── UserIcon.svg
    │       ├── layout.tsx
    │       └── page.tsx
    ├── tailwind.config.ts
    ├── tsconfig.json
    └── yarn.lock
````

## Dependencies

- "aos": "^2.3.4",
- "framer-motion": "^11.11.1",
- "next": "14.2.14",
- "react": "^18",
- "react-dom": "^18",
- "react-responsive": "^10.0.0",
- "swiper": "^11.1.14"

## Contributing

1. Fork the repository.
2. Create a new branch: git checkout -b feature/new-feature.
3. Commit your changes: git commit -m 'Add new feature'.
4. Push to the branch: git push origin feature/new-feature.
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.