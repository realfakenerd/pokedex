interface Icon {
  box: { w: number; h: number };
  svg: string;
}

export default {
  bug: {
    box: { w: 17, h: 18 },
    svg: `<path fill-rule="evenodd" clip-rule="evenodd" d="M11.3836 0.0177453C11.3967 -0.000947982 11.4225 -0.00549094 11.4412 0.00759823L12.7192 0.902525C12.7379 0.915613 12.7425 0.941376 12.7294 0.960069L10.9505 3.50055C11.8153 3.77684 12.4045 4.07486 12.4045 4.07486C12.4045 4.07486 10.9644 6.55205 8.52173 6.55205C6.0791 6.55205 4.34339 4.24326 4.34339 4.24326C4.34339 4.24326 4.95884 3.85049 5.87115 3.51363L3.91996 1.18833C3.9053 1.17084 3.90759 1.14478 3.92506 1.13011L5.12028 0.1272C5.13778 0.112532 5.16383 0.114812 5.17849 0.132293L7.64901 3.07654C7.86054 3.05261 8.07605 3.03923 8.29353 3.03923C8.60611 3.03923 8.9183 3.063 9.22307 3.10332L11.3836 0.0177453ZM11.8669 6.66937C12.5187 6.20383 13.5051 4.98875 13.5051 4.98875C13.5051 4.98875 16.0245 6.98528 16.0245 11.2187C16.0245 15.452 11.6688 17.9999 11.6688 17.9999C11.6688 17.9999 9.58768 15.8983 9.07678 13.2341C8.56592 10.5699 9.8325 7.6116 9.8325 7.6116C9.8325 7.6116 11.215 7.13491 11.8669 6.66937ZM4.84672 6.66937C4.19489 6.20383 3.20854 4.98875 3.20854 4.98875C3.20854 4.98875 0.689087 6.98528 0.689087 11.2187C0.689087 15.452 5.04483 17.9999 5.04483 17.9999C5.04483 17.9999 7.12592 15.8983 7.63681 13.2341C8.14767 10.5699 6.88109 7.6116 6.88109 7.6116C6.88109 7.6116 5.49859 7.13491 4.84672 6.66937Z" />`,
  },
  dark: {
    box: { w: 19, h: 18 },
    svg: `<path fill-rule="evenodd" clip-rule="evenodd" d="M8.29938 15.9207C8.64135 15.9731 8.99158 16.0002 9.3482 16.0002C13.1452 16.0002 16.2232 12.9222 16.2232 9.12519C16.2232 5.32819 13.1452 2.25013 9.3482 2.25013C9.09346 2.25013 8.84191 2.26399 8.59438 2.29099C10.4779 3.71795 11.7232 6.18984 11.7232 9.00017C11.7232 11.9547 10.3468 14.5352 8.29938 15.9207ZM9.22319 18.0002C14.1938 18.0002 18.2232 13.9708 18.2232 9.00017C18.2232 4.02958 14.1938 0.00012207 9.22319 0.00012207C4.25259 0.00012207 0.223145 4.02958 0.223145 9.00017C0.223145 13.9708 4.25259 18.0002 9.22319 18.0002Z" />`,
  },
  dragon: {
    box: { w: 17, h: 18 },
    svg: `<path fill-rule="evenodd" clip-rule="evenodd" d="M9.16255 8.96071C9.28454 8.88632 9.38804 8.73043 9.4715 8.55718C10.57 9.00613 11.3419 10.067 11.3419 11.3042C11.3419 12.9478 9.97958 14.2802 8.2991 14.2802C7.60926 14.2802 6.97304 14.0556 6.46267 13.6772C6.29526 13.5979 6.15751 13.5218 6.0448 13.4595C5.86997 13.3628 5.75532 13.2994 5.68353 13.3094C5.47369 13.3383 5.53461 13.5314 5.58998 13.7068C5.62756 13.8259 5.66262 13.9369 5.60837 13.9827C5.55163 14.0306 5.36783 13.8554 5.15306 13.6506C4.8607 13.3719 4.51096 13.0384 4.34604 13.1386C4.21565 13.2178 4.34225 13.4326 4.49722 13.6956L4.50871 13.7151C4.57417 13.8263 4.65004 13.9395 4.71926 14.0427C4.85999 14.2527 4.97334 14.4218 4.91663 14.4505C4.84808 14.4851 4.37044 14.1627 3.96794 13.7151C3.81258 13.5424 3.66211 13.3551 3.52226 13.1811V13.1811C3.21615 12.8002 2.96112 12.4829 2.81797 12.5205C2.64575 12.5657 2.77603 12.9209 2.96745 13.2628C3.05696 13.4226 3.16225 13.5854 3.25342 13.7263V13.7264C3.3952 13.9455 3.50282 14.1119 3.46379 14.1323C3.41113 14.1599 2.94773 13.708 2.63299 13.1386C2.44604 12.8003 2.28907 12.4265 2.16199 12.1239C2.02417 11.7958 1.92151 11.5513 1.85391 11.5267C1.61905 11.4412 1.61904 11.9201 1.71324 12.6112C1.72553 12.7014 1.74383 12.796 1.76636 12.8923C2.67987 15.848 5.4861 18.0001 8.80623 18.0001C12.8674 18.0001 16.1596 14.7802 16.1596 10.8082C16.1596 7.02777 13.1773 3.92863 9.38818 3.63848C9.39296 3.46039 9.48591 3.10723 9.48591 3.10723C9.48591 3.10723 10.1548 1.48878 10.1902 1.14293C10.1925 1.11998 10.1953 1.09504 10.1983 1.06847C10.2399 0.694793 10.3175 0 9.71974 0C9.40052 0 9.25209 0.237469 9.08232 0.509062V0.509065C9.01714 0.613329 8.94879 0.722623 8.86646 0.825438C8.27344 1.56599 7.27626 2.49079 6.71084 2.98348C5.51573 4.02485 4.34319 4.8807 3.65933 5.37985L3.6593 5.37988C3.34827 5.60689 3.13835 5.76014 3.07338 5.82345C2.58379 6.30074 0.828352 9.46714 0.828352 9.46714C0.828352 9.46714 0.260663 10.483 0.462444 10.6891C0.664224 10.8951 1.15082 10.8479 1.15082 10.8479C1.15082 10.8479 7.68784 9.3482 8.27309 9.22994C8.43066 9.19808 8.54189 9.1797 8.62729 9.1656C8.85915 9.12732 8.90077 9.12042 9.16255 8.96071ZM4.54063 7.03354C4.18974 7.36707 3.60779 8.16319 3.60779 8.16319C3.60779 8.16319 4.68935 8.22981 5.285 7.66361C5.88069 7.09738 5.74421 6.13244 5.74421 6.13244C5.74421 6.13244 4.89149 6.70001 4.54063 7.03354Z" />`,
  },
  eletric: {
    box: { w: 13, h: 18 },
    svg: `<path fill-rule="evenodd" clip-rule="evenodd" d="M2.95166 0.0205194C2.94818 0.0104752 2.95567 0 2.96629 0H9.28844C9.29522 0 9.30123 0.00441519 9.30324 0.0108908L12.2071 9.39278C12.2101 9.40273 12.2027 9.41282 12.1923 9.41282H7.98339C7.97826 9.41282 7.97457 9.41771 7.97598 9.42266L10.3899 17.9202C10.3946 17.9366 10.373 17.9474 10.3627 17.9337L0.981831 5.45863C0.974167 5.44844 0.981441 5.43389 0.994188 5.43389H4.81411C4.81942 5.43389 4.82315 5.42865 4.82139 5.42362L2.95166 0.0205194Z" />`,
  },
  fairy: {
    box: { w: 19, h: 18 },
    svg: '<path fill-rule="evenodd" clip-rule="evenodd" d="M4.49393 14.2727L7.38105 13.4356L9.87469 17.9951C9.87796 18.001 9.88643 18.001 9.88967 17.9951L12.3833 13.4356L15.2705 14.2727C15.2769 14.2746 15.2829 14.2686 15.281 14.2621L14.4437 11.4321L18.8775 9.00722C18.8834 9.00399 18.8834 8.99551 18.8775 8.99228L14.4072 6.54736L15.281 3.59387C15.2829 3.5874 15.2769 3.58139 15.2705 3.58325L12.3156 4.44005L9.88967 0.00443632C9.88643 -0.00147867 9.87796 -0.00147883 9.87473 0.00443618L7.44879 4.44005L4.49393 3.58325C4.48746 3.58139 4.48145 3.5874 4.48338 3.59387L5.35719 6.54736L0.886883 8.99228C0.880968 8.99551 0.880967 9.00399 0.886882 9.00722L5.32063 11.4321L4.48338 14.2621C4.48145 14.2686 4.48746 14.2746 4.49393 14.2727ZM6.73431 9.03085L8.77967 10.1495L9.89832 12.1948C9.90155 12.2008 9.91006 12.2008 9.91329 12.1948L11.0319 10.1495L13.0773 9.03085C13.0832 9.02761 13.0832 9.0191 13.0773 9.01587L11.0319 7.89723L9.91329 5.8519C9.91006 5.84595 9.90155 5.84595 9.89832 5.8519L8.77967 7.89723L6.73431 9.01587C6.7284 9.0191 6.7284 9.02761 6.73431 9.03085Z" />',
  },
  fight: {
    box: { w: 18, h: 18 },
    svg: `<path fill-rule="evenodd" clip-rule="evenodd"
    d="M2.74895 1.49633C2.96679 0.636259 3.74597 -0.00012207 4.67374 -0.00012207C5.36967 -0.00012207 5.98199 0.357936 6.3365 0.899883H6.91704C7.27771 0.529742 7.78161 0.299879 8.33922 0.299879C9.15675 0.299879 9.8589 0.793999 10.1633 1.49989H10.6493C10.9539 1.30975 11.3137 1.19988 11.6992 1.19988C12.5168 1.19988 13.2189 1.694 13.5233 2.39989H14.845C14.8563 2.39989 14.8669 2.40293 14.876 2.40824C14.9363 2.40271 14.9975 2.39989 15.0592 2.39989C16.1558 2.39989 17.0447 3.28881 17.0447 4.38536V10.3389L17.0447 10.3499L17.0447 10.361V10.4467C17.0447 10.483 17.0437 10.5192 17.0417 10.5552C16.9223 14.6853 13.2085 18 8.64466 18C4.00545 18 0.244629 14.5749 0.244629 10.3499C0.244629 8.31054 1.1209 6.45752 2.54926 5.08614C2.5457 7.07434 2.57928 9.1298 2.73408 9.09453C3.14859 9.00003 2.82473 2.84191 2.74895 1.49633Z"
     />`,
  },
  fire: {
    box: { w: 19, h: 18 },
    svg: `<g clip-path="url(#clip0_1257_35403)">
    <path fill-rule="evenodd" clip-rule="evenodd"
        d="M12.8547 13.9009C13.0771 13.0877 12.6454 11.4159 12.6454 11.4159C12.6454 11.4159 12.3323 12.7778 11.843 13.2812C11.4256 13.7106 10.9143 14.0084 10.1809 14.0866C10.7805 13.7954 11.1929 13.1881 11.1929 12.4862C11.1929 11.5009 10.3803 10.7022 9.37803 10.7022C8.37572 10.7022 7.56315 11.5009 7.56315 12.4862C7.56315 12.7553 7.62379 13.0105 7.73232 13.2393C7.10541 12.7399 7.00683 11.9392 7.00683 11.9392C7.00683 11.9392 6.3068 14.8455 8.23569 16.2127C10.1645 17.5799 13.9431 16.4047 13.9431 16.4047C13.9431 16.4047 8.53575 20.2095 4.52883 16.0685C1.0772 12.5013 3.62795 7.80508 3.62795 7.80508C3.62795 7.80508 3.51779 8.24074 3.51779 8.74646C3.51779 9.25219 3.79199 9.63698 3.79199 9.63698C3.79199 9.63698 4.6099 7.91294 5.24644 7.21181C5.84889 6.54827 6.60408 6.0101 7.25637 5.54526C7.75848 5.18744 8.19962 4.87307 8.46308 4.57842C9.91424 2.9558 9.02446 0.000244141 9.02446 0.000244141C9.02446 0.000244141 10.6603 1.44236 11.117 3.30487C11.2911 4.01483 11.1791 4.82262 11.0789 5.54498C10.9164 6.71766 10.785 7.66523 11.9594 7.60374C13.8572 7.50435 12.2081 4.57842 12.2081 4.57842C12.2081 4.57842 16.513 6.84109 16.1914 10.7984C15.8698 14.7556 11.4859 15.6553 11.4859 15.6553C11.4859 15.6553 12.6322 14.7141 12.8547 13.9009Z"
         />
</g>
<defs>
    <clipPath id="clip0_1257_35403">
        <rect width="18.0001" height="18.0001"  transform="translate(0.470703)" />
    </clipPath>
</defs>`,
  },
  flying: {
    box: { w: 19, h: 18 },
    svg: `<g clip-path="url(#clip0_1257_35411)">
    <path fill-rule="evenodd" clip-rule="evenodd"
        d="M7.28141 16.7953C9.91825 16.7953 12.1757 15.3298 13.1077 13.2523C13.1191 13.227 9.36601 14.2276 9.48569 13.8739C9.53912 13.7159 11.8398 12.8755 13.5159 11.8952C14.4793 11.3317 14.9229 10.139 14.9229 10.139C14.9229 10.139 13.2999 10.927 12.4794 11.1269C10.8259 11.5298 9.37037 11.4864 9.37037 11.4445C9.37037 11.3537 11.7872 10.8945 15.1463 8.84748C16.7264 7.88465 17.1555 6.22618 17.1555 6.22618C17.1555 6.22618 15.4184 7.26091 14.3683 7.60252C11.8779 8.41263 9.60536 8.65676 9.60536 8.54714C9.60536 8.31244 11.6053 7.76248 13.7257 6.73504C14.8282 6.20083 15.783 5.50291 16.8895 4.72676C18.7 3.45687 18.9986 1.19519 18.9986 1.19519C18.9986 1.19519 17.2129 2.34692 16.3415 2.7294C12.7457 4.30763 9.57069 5.13549 7.28141 5.31472C3.82568 5.58528 0.998535 7.99642 0.998535 11.1269C0.998535 14.2575 3.81147 16.7953 7.28141 16.7953Z"
         />
</g>
<defs>
    <clipPath id="clip0_1257_35411">
        <rect width="18.0001" height="18.0001"  transform="translate(0.998535)" />
    </clipPath>
</defs>`,
  },
  ghost: {
    box: { w: 19, h: 18 },
    svg: '<path fill-rule="evenodd" clip-rule="evenodd" d="M13.1477 17.9378C11.524 18.0209 9.66522 18.0209 9.03353 17.9378C4.10607 17.2895 0.176636 13.6869 0.176636 8.81723C0.176636 3.94761 4.20609 0 9.17668 0C14.1473 0 18.1767 3.94761 18.1767 8.81723C18.1767 11.082 17.3051 13.1474 15.8726 14.709C15.4836 15.133 16.0173 15.4304 16.5596 15.7326C17.0915 16.0291 17.6315 16.33 17.3176 16.7595C16.9718 17.2327 15.0967 17.838 13.1477 17.9378ZM7.91105 7.71508C7.91105 8.47594 7.28144 9.09276 6.5048 9.09276C5.72815 9.09276 5.09854 8.47594 5.09854 7.71508C5.09854 7.20478 5.38172 6.75932 5.80251 6.5212C5.82673 7.18464 6.37222 7.71505 7.0416 7.71505H7.91105V7.71508ZM12.2696 6.5212C12.2454 7.18464 11.6999 7.71505 11.0305 7.71505H10.1611V7.71508C10.1611 8.47594 10.7907 9.09276 11.5673 9.09276C12.344 9.09276 12.9736 8.47594 12.9736 7.71508C12.9736 7.20478 12.6904 6.75932 12.2696 6.5212Z" />',
  },
  grass: {
    box: { w: 17, h: 18 },
    svg: `<path fill-rule="evenodd" clip-rule="evenodd" d="M3.48369 15.4919C3.4219 15.4338 3.3608 15.3745 3.30041 15.3141C0.112265 12.126 0.112266 6.957 3.30041 3.76887C6.48854 0.580715 16.6472 0.367432 16.6472 0.367432C16.6472 0.367432 18.0338 12.126 14.8457 15.3141C12.0142 18.1456 7.6203 18.4624 4.43924 16.2645L7.00242 13.119L11.0999 12.2343L7.75516 11.9L9.88079 9.73566L12.3004 9.20561L10.3871 8.63899L12.3004 5.18747L9.57893 8.24003L8.528 6.75703L8.89795 9.20561L7.00242 11.3425L6.12376 8.63895V12.2343L3.48369 15.4919Z" />`,
  },
  ground: {
    box: { w: 19, h: 14 },
    svg: `<path fill-rule="evenodd" clip-rule="evenodd"
    d="M4.37503 13.4601C4.37014 13.4601 4.36673 13.4552 4.36835 13.4506L8.96382 0.465526C8.96484 0.462703 8.96751 0.460815 8.9705 0.460815H13.8763C13.8793 0.460815 13.882 0.462717 13.883 0.465558L18.4103 13.4507C18.4119 13.4553 18.4085 13.4601 18.4036 13.4601H4.51312H4.37503ZM0.417722 13.5109C0.412786 13.5109 0.409369 13.5059 0.4111 13.5013L3.83322 4.36515C3.83425 4.36237 3.83689 4.36054 3.83984 4.36054H6.81327C6.81819 4.36054 6.8216 4.36543 6.81991 4.37004L3.51082 13.5062C3.50981 13.509 3.50715 13.5109 3.50417 13.5109H0.417722Z"
     />`,
  },
  ice: {
    box: { w: 19, h: 16 },
    svg: `<path fill-rule="evenodd" clip-rule="evenodd"
    d="M14.0623 0.0193964L14.1177 4.8833L9.87539 6.9198L9.82308 2.32735L14.0623 0.0193964Z"
     />
<path fill-rule="evenodd" clip-rule="evenodd"
    d="M18.3151 7.68398L14.1155 10.0861L9.91342 7.68018L14.1134 5.47405L18.3151 7.68398Z"
     />
<path fill-rule="evenodd" clip-rule="evenodd"
    d="M9.16663 7.68398L4.96702 10.0861L0.764893 7.68018L4.96484 5.47405L9.16663 7.68398Z"
     />
<path fill-rule="evenodd" clip-rule="evenodd"
    d="M4.91934 -0.000244141L9.27825 2.15856L9.1668 6.86306L5.05118 4.82476L4.91934 -0.000244141Z"
     />
<path fill-rule="evenodd" clip-rule="evenodd"
    d="M14.1815 15.2943L9.82259 13.1354L9.93403 8.43092L14.0497 10.4693L14.1815 15.2943Z"
     />
<path fill-rule="evenodd" clip-rule="evenodd"
    d="M5.0705 15.3382L5.01509 10.4743L9.25745 8.43779L9.30977 13.0302L5.0705 15.3382Z"
     />`,
  },
  normal: {
    box: { w: 19, h: 18 },
    svg: `<path fill-rule="evenodd" clip-rule="evenodd" d="M18.9409 8.9989C18.9409 13.9695 14.9115 17.9989 9.94092 17.9989C4.97036 17.9989 0.940918 13.9695 0.940918 8.9989C0.940918 4.02834 4.97036 -0.00109863 9.94092 -0.00109863C14.9115 -0.00109863 18.9409 4.02834 18.9409 8.9989ZM15.0838 8.9989C15.0838 11.8392 12.7812 14.1417 9.94092 14.1417C7.1006 14.1417 4.79808 11.8392 4.79808 8.9989C4.79808 6.15858 7.1006 3.85606 9.94092 3.85606C12.7812 3.85606 15.0838 6.15858 15.0838 8.9989Z" />`,
  },
  poison: {
    box: { w: 19, h: 18 },
    svg: `<g clip-path="url(#clip0_1257_35407)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7453 13.8323C17.5629 12.3789 18.7047 10.2789 18.7047 7.9436C18.7047 3.55646 14.6752 0 9.70464 0C4.73405 0 0.70459 3.55646 0.70459 7.9436C0.70459 10.1946 1.76539 12.2269 3.46983 13.6724C3.36653 14.029 3.30986 14.417 3.30986 14.8227C3.30986 16.5775 4.37025 18.0001 5.67831 18.0001C6.52825 18.0001 7.27364 17.3995 7.69148 16.4973C8.10931 17.3995 8.8547 18.0001 9.70464 18.0001C10.4794 18.0001 11.1673 17.501 11.5994 16.7294C12.0315 17.501 12.7194 18.0001 13.4941 18.0001C14.8022 18.0001 15.8626 16.5775 15.8626 14.8227C15.8626 14.4769 15.8214 14.1439 15.7453 13.8323ZM14.9152 8.10113C14.9152 10.3284 12.5293 12.134 9.58623 12.134C6.64311 12.134 4.25725 10.3284 4.25725 8.10113C4.25725 5.87383 6.64311 4.06823 9.58623 4.06823C12.5293 4.06823 14.9152 5.87383 14.9152 8.10113Z" />
  </g>
  <defs>
    <clipPath id="clip0_1257_35407">
      <rect width="18.0001" height="18.0001"  transform="translate(0.70459)"/>
    </clipPath>
  </defs>`,
  },
  psychic: {
    box: { w: 18, h: 18 },
    svg: `<path fill-rule="evenodd" clip-rule="evenodd"
    d="M16.1454 14.9477C16.1454 14.9477 13.8757 16.7681 9.35908 16.0148C5.93238 15.4432 4.10474 11.6658 4.10474 9.6354C4.10474 4.82143 7.6677 3.72592 10.0765 3.72592C12.4853 3.72592 14.0567 6.07437 14.0567 7.89266C14.0567 9.71095 12.7707 11.3014 10.7693 11.3014C8.76799 11.3014 8.17525 9.89633 8.17525 8.60458C8.17525 7.31286 9.22035 6.85776 10.1735 6.85776C11.1266 6.85776 11.453 7.67149 11.453 8.37086C11.453 9.07026 10.9103 9.32071 10.4577 9.32071C10.0051 9.32071 9.96036 9.09237 9.78714 8.8524C9.61389 8.61245 10.0081 7.70415 9.35908 7.70415C8.71009 7.70415 8.58912 8.74833 8.58912 8.74833C8.58912 8.74833 8.82572 10.764 10.7693 10.7292C12.7129 10.6944 13.635 9.1918 13.367 7.70415C13.0991 6.21647 11.6553 4.63566 9.12142 4.95509C6.58755 5.27452 5.55301 7.83476 6.00902 10.5708C6.46503 13.3068 9.74277 14.8921 12.3199 14.3218C14.8971 13.7514 17.4639 11.8857 17.4639 7.15525C17.4639 2.42481 13.367 -0.418613 8.48185 0.0499994C3.59669 0.518609 0.564202 4.78954 0.758307 9.92115C0.952413 15.0528 5.82171 17.8476 9.93919 17.9916C14.0567 18.1357 16.5809 15.7522 16.5809 15.7522C16.5809 15.7522 17.1485 15.246 16.926 14.8507C16.7034 14.4554 16.1454 14.9477 16.1454 14.9477Z"
     />`,
  },
  rock: {
    box: { w: 19, h: 16 },
    svg: `<path fill-rule="evenodd" clip-rule="evenodd"
    d="M16.1454 14.9477C16.1454 14.9477 13.8757 16.7681 9.35908 16.0148C5.93238 15.4432 4.10474 11.6658 4.10474 9.6354C4.10474 4.82143 7.6677 3.72592 10.0765 3.72592C12.4853 3.72592 14.0567 6.07437 14.0567 7.89266C14.0567 9.71095 12.7707 11.3014 10.7693 11.3014C8.76799 11.3014 8.17525 9.89633 8.17525 8.60458C8.17525 7.31286 9.22035 6.85776 10.1735 6.85776C11.1266 6.85776 11.453 7.67149 11.453 8.37086C11.453 9.07026 10.9103 9.32071 10.4577 9.32071C10.0051 9.32071 9.96036 9.09237 9.78714 8.8524C9.61389 8.61245 10.0081 7.70415 9.35908 7.70415C8.71009 7.70415 8.58912 8.74833 8.58912 8.74833C8.58912 8.74833 8.82572 10.764 10.7693 10.7292C12.7129 10.6944 13.635 9.1918 13.367 7.70415C13.0991 6.21647 11.6553 4.63566 9.12142 4.95509C6.58755 5.27452 5.55301 7.83476 6.00902 10.5708C6.46503 13.3068 9.74277 14.8921 12.3199 14.3218C14.8971 13.7514 17.4639 11.8857 17.4639 7.15525C17.4639 2.42481 13.367 -0.418613 8.48185 0.0499994C3.59669 0.518609 0.564202 4.78954 0.758307 9.92115C0.952413 15.0528 5.82171 17.8476 9.93919 17.9916C14.0567 18.1357 16.5809 15.7522 16.5809 15.7522C16.5809 15.7522 17.1485 15.246 16.926 14.8507C16.7034 14.4554 16.1454 14.9477 16.1454 14.9477Z"
     />`,
  },
  steel: {
    box: { w: 19, h: 16 },
    svg: `<path fill-rule="evenodd" clip-rule="evenodd"
    d="M0.530605 7.94874C0.528211 7.94467 0.52821 7.9396 0.530602 7.93549L5.05678 0.20228C5.05914 0.198269 5.06346 0.195801 5.0681 0.195801H14.0392C14.0439 0.195801 14.0482 0.19829 14.0506 0.202336L18.5271 7.93556C18.5295 7.9396 18.5295 7.94463 18.5271 7.94867L14.0506 15.6732C14.0482 15.6773 14.0439 15.6798 14.0392 15.6798H5.0681C5.06346 15.6798 5.05914 15.6773 5.05678 15.6733L0.530605 7.94874ZM13.699 7.93778C13.699 10.2401 11.8326 12.1065 9.53026 12.1065C7.22794 12.1065 5.36152 10.2401 5.36152 7.93778C5.36152 5.63542 7.22794 3.76903 9.53026 3.76903C11.8326 3.76903 13.699 5.63542 13.699 7.93778Z"
     />`,
  },
  water: {
    box: { w: 12, h: 18 },
    svg: `<path fill-rule="evenodd" clip-rule="evenodd"
    d="M11.842 12.1824C11.842 15.395 9.22785 17.9994 6.00306 17.9994C2.77826 17.9994 0.164062 15.395 0.164062 12.1824C0.164062 9.05779 5.68721 0.476418 5.99012 0.00813106C5.99704 -0.00254766 6.0091 -0.00254756 6.01599 0.00813116C6.3189 0.476418 11.842 9.05779 11.842 12.1824ZM5.02971 16.1345C2.06673 15.4862 2.57376 12.204 2.57376 12.204C2.57376 12.204 3.38285 14.1853 5.3463 14.8271C7.30971 15.4689 9.68249 14.5276 9.68249 14.5276C9.68249 14.5276 7.9927 16.7828 5.02971 16.1345Z"
     />`,
  },
} satisfies Record<Elements, Icon>;
