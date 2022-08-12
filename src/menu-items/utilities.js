// assets
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import CurrencyBitcoinOutlinedIcon from '@mui/icons-material/CurrencyBitcoinOutlined';

// constant
const icons = {
    HomeOutlinedIcon,
    MusicNoteOutlinedIcon,
    AutoGraphOutlinedIcon,
    MonetizationOnOutlinedIcon,
    CurrencyBitcoinOutlinedIcon
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Utilities',
    type: 'group',
    children: [
        {
            id: 'modern',
            title: 'Modern',
            type: 'item',
            url: '/',
            icon: icons.HomeOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'general',
            title: 'General',
            type: 'item',
            url: '/',
            icon: icons.AutoGraphOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'music',
            title: 'Music',
            type: 'item',
            url: '/',
            icon: icons.MusicNoteOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'nft',
            title: 'NFT',
            type: 'item',
            url: '/',
            icon: icons.MonetizationOnOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'crypto',
            title: 'Crypto',
            type: 'item',
            url: '/',
            icon: icons.CurrencyBitcoinOutlinedIcon,
            breadcrumbs: false
        }
    ]
};

export default utilities;
