import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center space-x-4 mt-4">
            <InstagramIcon className="text-white text-[40px] md:text-[30px]" />
            <XIcon className="text-white text-[40px] md:text-[30px]" />
            <FacebookIcon className="text-white text-[40px] md:text-[30px]" />
            <YouTubeIcon className="text-white text-[40px] md:text-[30px]" />
        </div>
    );
};

export default SocialMediaIcons;