import React, { HTMLProps } from 'react';
interface StarProps extends HTMLProps<HTMLSpanElement> {
    lighten: boolean;
    index: number;
    setOverride: (value: number) => void;
    setRating: (value: number) => void;
    clearable: boolean;
    rating: number;
}
export declare const Star: React.FC<StarProps>;
export default Star;
//# sourceMappingURL=star.d.ts.map