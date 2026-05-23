import arrowRight from './arrow-right.svg'
import copyrightSign from './copyright-sign.svg'
import facebook from './facebook.svg'
import hamburger from './hamburger.svg'
import instagram from './instagram.svg'
import support from './support.svg'
import shieldTick from './shield-tick.svg'
import star from './star.svg'
import truckFast from './truck-fast.svg'
import twitter from './twitter.svg'

const assetUrl = (asset: string | { src: string }) =>
    typeof asset === 'string' ? asset : asset.src;

const resolvedArrowRight = assetUrl(arrowRight);
const resolvedCopyrightSign = assetUrl(copyrightSign);
const resolvedFacebook = assetUrl(facebook);
const resolvedHamburger = assetUrl(hamburger);
const resolvedInstagram = assetUrl(instagram);
const resolvedSupport = assetUrl(support);
const resolvedShieldTick = assetUrl(shieldTick);
const resolvedStar = assetUrl(star);
const resolvedTruckFast = assetUrl(truckFast);
const resolvedTwitter = assetUrl(twitter);

export {
    resolvedArrowRight as arrowRight,
    resolvedCopyrightSign as copyrightSign,
    resolvedFacebook as facebook,
    resolvedHamburger as hamburger,
    resolvedInstagram as instagram,
    resolvedSupport as support,
    resolvedShieldTick as shieldTick,
    resolvedStar as star,
    resolvedTruckFast as truckFast,
    resolvedTwitter as twitter
}
