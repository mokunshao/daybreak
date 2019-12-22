import React from 'react';
interface StarProps {
    lighten: boolean;
    index: number;
    setOverride: (value: number) => void;
    setRating: (value: number) => void;
    clearable: boolean;
    rating: number;
}
declare const Star: React.FC<StarProps>;
export default Star;
//# sourceMappingURL=star.d.ts.map