import * as React from "react";

export const ApicaIcon = React.forwardRef(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="29"
        viewBox="0 0 48 48"
        xmlSpace="preserve"
      >
        <image
          width="48"
          height="48"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAgVBMVEUAAAAlw24nxnIoxHIp xXPkoywqxXMpxXMoxHIpxXMpxXIpxXMoxHEoxHL/0zb/1DTzfy//0zf/0zb9dSj/0zf/0zb/0zb/ 1Sn/1Db/0zf/0jX/0zb/0jXxYi/vYS/wYzHxYzDyYDD/0TbxYzHwYjDxYjDwYi8qxXP/0zfwYzH/ //8y7kmNAAAAJ3RSTlMABhBlwgL37CTWqIVNPSocFrF2Bs/fkgiM8zzAXm9Q6cwrnPeOtZ2JDtqk AAAAAWJLR0QqU77UngAAAAd0SU1FB+gGBxcdBbI70zAAAAHGSURBVEjH3ZTbgoIgGIRNRc3KE7mm ZWpWwPu/4HIQUTS1y9257Z+Gb/jRMP6tdqa5+2betGzb+sIBLAch19o+7+0Rle1tBvAR12HjocDR FQb3tJG4C0DINzcZLFca3OMmAhv1srdEgIPTG5xN3N4gYr/KDYCxs1QEOqwdKgjHEWvVRnECDePk Koe/SAETfA5oUQNuZIEFgCDF+CeTy9RxL6xUdsEY58U4Yun2ChqA8XXMvbAfWczmcX6DdAGd9Zrg LecGfA4NIFec3/UH7OCMOyV0ouNmrwiW0eyBklwa0gIAwe3Qlw3uVQnnAlLcK466CLauUU3qZibg oeYpN+BfAlYpLFvSPicR4JYPDLxa0+fETU0Iqe46eHgdzuOccZ848bOlBvLSuGEyCqDcAd1zjxHz edJq3KpSqQf/SxC9iNBrxA0u+jznpj+UbWdoywEFKPKpgVUriIWqRjnCGE9FF0QSC717bq1SuR/0 XTSVmh9Uq1XaBdCX1xN33NGHSvu7LquRQXIPl0htU8aXaKxaRCQz82khlkjTnRtuMwe60ICm0udb YYimpaZTYjYvqcPkoYndcvN8a1IPD2SaeBtQ18IX7W/pFzmiei5RsWPPAAAAJXRFWHRkYXRlOmNy ZWF0ZQAyMDI0LTA2LTA3VDIzOjI5OjA1KzAwOjAwmv0TWwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAy NC0wNi0wN1QyMzoyOTowNSswMDowMOugq+cAAAAASUVORK5CYII="
        />
      </svg>
    );
  }
);

ApicaIcon.displayName = "ApicaIcon";

export default ApicaIcon;
