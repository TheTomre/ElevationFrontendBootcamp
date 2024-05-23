import React from 'react';

interface CharacterDetailProps {
  label: string;
  value: string | undefined;
  isHouse?: boolean;
}

const CharacterDetail: React.FC<CharacterDetailProps> = ({ label, value, isHouse }) => {
  const displayValue = isHouse && !value ? 'Unknown' : value || 'Unknown';
  return (
    <p className="text-gray-400 mb-1">
      <strong>{label}:</strong> {displayValue}
    </p>
  );
};

export default CharacterDetail;
