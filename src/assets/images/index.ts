import bigShoe1 from './big-shoe1.png'
import bigShoe2 from './big-shoe2.png'
import bigShoe3 from './big-shoe3.png'

import customer1 from './customer1.jpeg'
import customer2 from './customer2.svg'

import footerLogo from './footer-logo.svg'
import headerLogo from './header-logo.svg'
import headerLogoDark from './header-logo-dark.svg'

import offer from './offer.svg'

import shoe4 from './shoe4.svg'
import shoe5 from './shoe5.svg'
import shoe6 from './shoe6.svg'
import shoe7 from './shoe7.svg'
import shoe8 from './shoe8.svg'

import thumbnailShoe1 from './thumbnail-shoe1.svg'
import thumbnailShoe2 from './thumbnail-shoe2.svg'
import thumbnailShoe3 from './thumbnail-shoe3.svg'

const assetUrl = (asset: string | { src: string }) =>
    typeof asset === 'string' ? asset : asset.src;

const resolvedBigShoe1 = assetUrl(bigShoe1);
const resolvedBigShoe2 = assetUrl(bigShoe2);
const resolvedBigShoe3 = assetUrl(bigShoe3);
const resolvedCustomer1 = assetUrl(customer1);
const resolvedCustomer2 = assetUrl(customer2);
const resolvedFooterLogo = assetUrl(footerLogo);
const resolvedHeaderLogo = assetUrl(headerLogo);
const resolvedHeaderLogoDark = assetUrl(headerLogoDark);
const resolvedOffer = assetUrl(offer);
const resolvedShoe4 = assetUrl(shoe4);
const resolvedShoe5 = assetUrl(shoe5);
const resolvedShoe6 = assetUrl(shoe6);
const resolvedShoe7 = assetUrl(shoe7);
const resolvedShoe8 = assetUrl(shoe8);
const resolvedThumbnailShoe1 = assetUrl(thumbnailShoe1);
const resolvedThumbnailShoe2 = assetUrl(thumbnailShoe2);
const resolvedThumbnailShoe3 = assetUrl(thumbnailShoe3);

export {
    resolvedBigShoe1 as bigShoe1,
    resolvedBigShoe2 as bigShoe2,
    resolvedBigShoe3 as bigShoe3,

    resolvedCustomer1 as customer1,
    resolvedCustomer2 as customer2,

    resolvedFooterLogo as footerLogo,
    resolvedHeaderLogo as headerLogo,
    resolvedHeaderLogoDark as headerLogoDark,

    resolvedOffer as offer,
    resolvedShoe4 as shoe4,
    resolvedShoe5 as shoe5,
    resolvedShoe6 as shoe6,
    resolvedShoe7 as shoe7,
    resolvedShoe8 as shoe8,

    resolvedThumbnailShoe1 as thumbnailShoe1,
    resolvedThumbnailShoe2 as thumbnailShoe2,
    resolvedThumbnailShoe3 as thumbnailShoe3
}
