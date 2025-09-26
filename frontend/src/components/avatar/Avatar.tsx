import React from 'react';
import './Avatar.css';

interface AvatarProps {
  avatarUrl: string;
  number?: number;
}

const Avatar = ({ avatarUrl, number }: AvatarProps) => {
  return (
    <div
      className="avatar"
      style={{
        zIndex: number ? 10 - number : 10,
        marginLeft: number ? -20 : 0,
      }}
    >
      <img src={avatarUrl} alt="User Avatar" className="avatar-image" />
    </div>
  );
};

const AvatarGroup = () => {
  const avatarUrls = ['./shrimp.jpg', './shrimp.jpg', './shrimp.jpg'];

  return (
    <div className="avatar-group">
      {avatarUrls.map((url, index) => (
        <Avatar key={index} avatarUrl={url} number={index} />
      ))}
    </div>
  );
};

export default AvatarGroup;
