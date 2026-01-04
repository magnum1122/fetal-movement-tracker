import * as React from "react";
import Svg, {
  Path,
  G,
  Ellipse,
  Defs,
  LinearGradient,
  Stop,
  RadialGradient,
  SvgProps,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
export const Badge = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M4.97461 17.2793C6.3208 17.2793 7.41211 16.188 7.41211 14.8418C7.41211 13.4956 6.3208 12.4043 4.97461 12.4043C3.62842 12.4043 2.53711 13.4956 2.53711 14.8418C2.53711 16.188 3.62842 17.2793 4.97461 17.2793Z"
      fill="url(#paint0_linear_1_37162)"
    />
    <Path
      d="M4.97461 17.2793C6.3208 17.2793 7.41211 16.188 7.41211 14.8418C7.41211 13.4956 6.3208 12.4043 4.97461 12.4043C3.62842 12.4043 2.53711 13.4956 2.53711 14.8418C2.53711 16.188 3.62842 17.2793 4.97461 17.2793Z"
      fill="url(#paint1_radial_1_37162)"
    />
    <G filter="url(#filter0_f_1_37162)">
      <Path
        d="M4.97457 16.3565C5.81114 16.3565 6.48931 15.6783 6.48931 14.8418C6.48931 14.0052 5.81114 13.327 4.97457 13.327C4.13801 13.327 3.45984 14.0052 3.45984 14.8418C3.45984 15.6783 4.13801 16.3565 4.97457 16.3565Z"
        fill="url(#paint2_radial_1_37162)"
      />
    </G>
    <Path
      d="M19.2246 17.2793C20.5708 17.2793 21.6621 16.188 21.6621 14.8418C21.6621 13.4956 20.5708 12.4043 19.2246 12.4043C17.8784 12.4043 16.7871 13.4956 16.7871 14.8418C16.7871 16.188 17.8784 17.2793 19.2246 17.2793Z"
      fill="url(#paint3_linear_1_37162)"
    />
    <Path
      d="M19.2246 17.2793C20.5708 17.2793 21.6621 16.188 21.6621 14.8418C21.6621 13.4956 20.5708 12.4043 19.2246 12.4043C17.8784 12.4043 16.7871 13.4956 16.7871 14.8418C16.7871 16.188 17.8784 17.2793 19.2246 17.2793Z"
      fill="url(#paint4_radial_1_37162)"
    />
    <Path
      d="M19.2246 17.2793C20.5708 17.2793 21.6621 16.188 21.6621 14.8418C21.6621 13.4956 20.5708 12.4043 19.2246 12.4043C17.8784 12.4043 16.7871 13.4956 16.7871 14.8418C16.7871 16.188 17.8784 17.2793 19.2246 17.2793Z"
      fill="url(#paint5_radial_1_37162)"
    />
    <Path
      d="M19.2246 17.2793C20.5708 17.2793 21.6621 16.188 21.6621 14.8418C21.6621 13.4956 20.5708 12.4043 19.2246 12.4043C17.8784 12.4043 16.7871 13.4956 16.7871 14.8418C16.7871 16.188 17.8784 17.2793 19.2246 17.2793Z"
      fill="url(#paint6_radial_1_37162)"
    />
    <G filter="url(#filter1_f_1_37162)">
      <Path
        d="M19.2247 16.4029C20.0868 16.4029 20.7858 15.704 20.7858 14.8418C20.7858 13.9796 20.0868 13.2807 19.2247 13.2807C18.3625 13.2807 17.6636 13.9796 17.6636 14.8418C17.6636 15.704 18.3625 16.4029 19.2247 16.4029Z"
        fill="url(#paint7_radial_1_37162)"
      />
    </G>
    <G filter="url(#filter2_ii_1_37162)">
      <Path
        d="M17.5215 4.31333C16.3582 3.44325 14.9654 2.9707 13.5419 2.9707H10.6873C9.26388 2.9707 7.87104 3.44325 6.70778 4.31333C4.72565 5.80598 3.65423 8.28871 3.89913 10.8315L4.57259 16.9145C4.79453 19.2698 6.35574 21.25 8.52154 21.925C10.8634 22.6526 13.3659 22.6526 15.7077 21.925C17.8735 21.25 19.4347 19.2698 19.6567 16.9145L20.3301 10.8315C20.575 8.28871 19.5036 5.80598 17.5215 4.31333Z"
        fill="url(#paint8_linear_1_37162)"
      />
      <Path
        d="M17.5215 4.31333C16.3582 3.44325 14.9654 2.9707 13.5419 2.9707H10.6873C9.26388 2.9707 7.87104 3.44325 6.70778 4.31333C4.72565 5.80598 3.65423 8.28871 3.89913 10.8315L4.57259 16.9145C4.79453 19.2698 6.35574 21.25 8.52154 21.925C10.8634 22.6526 13.3659 22.6526 15.7077 21.925C17.8735 21.25 19.4347 19.2698 19.6567 16.9145L20.3301 10.8315C20.575 8.28871 19.5036 5.80598 17.5215 4.31333Z"
        fill="url(#paint9_linear_1_37162)"
      />
      <Path
        d="M17.5215 4.31333C16.3582 3.44325 14.9654 2.9707 13.5419 2.9707H10.6873C9.26388 2.9707 7.87104 3.44325 6.70778 4.31333C4.72565 5.80598 3.65423 8.28871 3.89913 10.8315L4.57259 16.9145C4.79453 19.2698 6.35574 21.25 8.52154 21.925C10.8634 22.6526 13.3659 22.6526 15.7077 21.925C17.8735 21.25 19.4347 19.2698 19.6567 16.9145L20.3301 10.8315C20.575 8.28871 19.5036 5.80598 17.5215 4.31333Z"
        fill="url(#paint10_linear_1_37162)"
      />
      <Path
        d="M17.5215 4.31333C16.3582 3.44325 14.9654 2.9707 13.5419 2.9707H10.6873C9.26388 2.9707 7.87104 3.44325 6.70778 4.31333C4.72565 5.80598 3.65423 8.28871 3.89913 10.8315L4.57259 16.9145C4.79453 19.2698 6.35574 21.25 8.52154 21.925C10.8634 22.6526 13.3659 22.6526 15.7077 21.925C17.8735 21.25 19.4347 19.2698 19.6567 16.9145L20.3301 10.8315C20.575 8.28871 19.5036 5.80598 17.5215 4.31333Z"
        fill="url(#paint11_radial_1_37162)"
      />
      <Path
        d="M17.5215 4.31333C16.3582 3.44325 14.9654 2.9707 13.5419 2.9707H10.6873C9.26388 2.9707 7.87104 3.44325 6.70778 4.31333C4.72565 5.80598 3.65423 8.28871 3.89913 10.8315L4.57259 16.9145C4.79453 19.2698 6.35574 21.25 8.52154 21.925C10.8634 22.6526 13.3659 22.6526 15.7077 21.925C17.8735 21.25 19.4347 19.2698 19.6567 16.9145L20.3301 10.8315C20.575 8.28871 19.5036 5.80598 17.5215 4.31333Z"
        fill="url(#paint12_radial_1_37162)"
      />
      <Path
        d="M17.5215 4.31333C16.3582 3.44325 14.9654 2.9707 13.5419 2.9707H10.6873C9.26388 2.9707 7.87104 3.44325 6.70778 4.31333C4.72565 5.80598 3.65423 8.28871 3.89913 10.8315L4.57259 16.9145C4.79453 19.2698 6.35574 21.25 8.52154 21.925C10.8634 22.6526 13.3659 22.6526 15.7077 21.925C17.8735 21.25 19.4347 19.2698 19.6567 16.9145L20.3301 10.8315C20.575 8.28871 19.5036 5.80598 17.5215 4.31333Z"
        fill="url(#paint13_radial_1_37162)"
      />
      <Path
        d="M17.5215 4.31333C16.3582 3.44325 14.9654 2.9707 13.5419 2.9707H10.6873C9.26388 2.9707 7.87104 3.44325 6.70778 4.31333C4.72565 5.80598 3.65423 8.28871 3.89913 10.8315L4.57259 16.9145C4.79453 19.2698 6.35574 21.25 8.52154 21.925C10.8634 22.6526 13.3659 22.6526 15.7077 21.925C17.8735 21.25 19.4347 19.2698 19.6567 16.9145L20.3301 10.8315C20.575 8.28871 19.5036 5.80598 17.5215 4.31333Z"
        fill="url(#paint14_radial_1_37162)"
      />
      <Path
        d="M17.5215 4.31333C16.3582 3.44325 14.9654 2.9707 13.5419 2.9707H10.6873C9.26388 2.9707 7.87104 3.44325 6.70778 4.31333C4.72565 5.80598 3.65423 8.28871 3.89913 10.8315L4.57259 16.9145C4.79453 19.2698 6.35574 21.25 8.52154 21.925C10.8634 22.6526 13.3659 22.6526 15.7077 21.925C17.8735 21.25 19.4347 19.2698 19.6567 16.9145L20.3301 10.8315C20.575 8.28871 19.5036 5.80598 17.5215 4.31333Z"
        fill="url(#paint15_radial_1_37162)"
      />
      <Path
        d="M17.5215 4.31333C16.3582 3.44325 14.9654 2.9707 13.5419 2.9707H10.6873C9.26388 2.9707 7.87104 3.44325 6.70778 4.31333C4.72565 5.80598 3.65423 8.28871 3.89913 10.8315L4.57259 16.9145C4.79453 19.2698 6.35574 21.25 8.52154 21.925C10.8634 22.6526 13.3659 22.6526 15.7077 21.925C17.8735 21.25 19.4347 19.2698 19.6567 16.9145L20.3301 10.8315C20.575 8.28871 19.5036 5.80598 17.5215 4.31333Z"
        fill="url(#paint16_radial_1_37162)"
      />
    </G>
    <Path
      d="M17.5215 4.31333C16.3582 3.44325 14.9654 2.9707 13.5419 2.9707H10.6873C9.26388 2.9707 7.87104 3.44325 6.70778 4.31333C4.72565 5.80598 3.65423 8.28871 3.89913 10.8315L4.57259 16.9145C4.79453 19.2698 6.35574 21.25 8.52154 21.925C10.8634 22.6526 13.3659 22.6526 15.7077 21.925C17.8735 21.25 19.4347 19.2698 19.6567 16.9145L20.3301 10.8315C20.575 8.28871 19.5036 5.80598 17.5215 4.31333Z"
      fill="url(#paint17_linear_1_37162)"
    />
    <Path
      d="M17.5215 4.31333C16.3582 3.44325 14.9654 2.9707 13.5419 2.9707H10.6873C9.26388 2.9707 7.87104 3.44325 6.70778 4.31333C4.72565 5.80598 3.65423 8.28871 3.89913 10.8315L4.57259 16.9145C4.79453 19.2698 6.35574 21.25 8.52154 21.925C10.8634 22.6526 13.3659 22.6526 15.7077 21.925C17.8735 21.25 19.4347 19.2698 19.6567 16.9145L20.3301 10.8315C20.575 8.28871 19.5036 5.80598 17.5215 4.31333Z"
      fill="url(#paint18_radial_1_37162)"
    />
    <G filter="url(#filter3_f_1_37162)">
      <Path
        d="M9.46973 17.8363C9.29683 17.5695 9.5898 17.2547 9.86523 17.4027C10.5066 17.7445 11.2741 17.9457 12.0938 17.9457C12.9134 17.9457 13.6812 17.7449 14.3379 17.4027L14.3389 17.4018C14.5965 17.2723 14.8623 17.5399 14.7578 17.7875L14.7324 17.8363C14.1701 18.702 13.2036 19.2777 12.1006 19.2777C10.998 19.2776 10.0247 18.7023 9.46973 17.8363Z"
        stroke="url(#paint19_linear_1_37162)"
        strokeWidth={0.1125}
      />
    </G>
    <G filter="url(#filter4_i_1_37162)">
      <Path
        d="M12.0936 18.0017C11.2647 18.0017 10.4881 17.7985 9.83838 17.4522C9.61436 17.3317 9.37539 17.5877 9.51728 17.806C10.0624 18.6567 11.0183 19.2213 12.1011 19.2213C13.1839 19.2213 14.1323 18.6567 14.6849 17.806C14.8193 17.5952 14.5878 17.3393 14.3638 17.4522C13.6991 17.7985 12.9225 18.0017 12.0936 18.0017Z"
        fill="#89024E"
      />
    </G>
    <Path
      d="M15.6321 12.8246C16.8396 12.8246 17.8596 13.6571 18.1371 14.7821C18.2196 15.1046 17.9721 15.4121 17.6421 15.4121H13.5171C13.2546 15.4121 13.0446 15.1721 13.0971 14.9096C13.3296 13.7246 14.3721 12.8246 15.6321 12.8246Z"
      fill="white"
    />
    <Path
      d="M8.13207 12.8246C6.92457 12.8246 5.90457 13.6571 5.62707 14.7821C5.54457 15.1046 5.79207 15.4121 6.12207 15.4121H10.2471C10.5096 15.4121 10.7196 15.1721 10.6671 14.9096C10.4346 13.7246 9.38457 12.8246 8.13207 12.8246Z"
      fill="white"
    />
    <Path
      d="M15.2495 13.327C16.1645 13.327 16.8995 14.0695 16.8995 14.977C16.8995 15.127 16.877 15.277 16.8395 15.412H13.652C13.6145 15.2695 13.592 15.127 13.592 14.977C13.592 14.0695 14.3345 13.327 15.2495 13.327Z"
      fill="url(#paint20_radial_1_37162)"
    />
    <Path
      d="M8.51462 13.327C7.59962 13.327 6.86462 14.0695 6.86462 14.977C6.86462 15.127 6.88712 15.277 6.92462 15.412H10.1121C10.1496 15.2695 10.1721 15.127 10.1721 14.977C10.1646 14.0695 9.42962 13.327 8.51462 13.327Z"
      fill="url(#paint21_radial_1_37162)"
    />
    <Path
      d="M14.3046 14.977C14.3046 14.452 14.7246 14.032 15.2496 14.032C15.7746 14.032 16.1946 14.452 16.1946 14.977C16.1946 15.1345 16.1571 15.2845 16.0896 15.412H14.4171C14.3421 15.2845 14.3046 15.1345 14.3046 14.977Z"
      fill="black"
    />
    <Path
      d="M9.45958 14.977C9.45958 14.452 9.03958 14.032 8.51458 14.032C7.98958 14.032 7.56958 14.452 7.56958 14.977C7.56958 15.1345 7.60708 15.2845 7.67458 15.412H9.34708C9.41458 15.2845 9.45958 15.1345 9.45958 14.977Z"
      fill="black"
    />
    <G filter="url(#filter5_i_1_37162)">
      <Path
        d="M7.20959 11.3396C7.65209 11.1821 8.26709 11.0696 9.06209 11.1446"
        stroke="#1F1917"
        strokeWidth={0.75}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <G filter="url(#filter6_f_1_37162)">
      <Path
        d="M7.25061 11.2692C7.69311 11.1117 8.30811 10.9992 9.10311 11.0742"
        stroke="url(#paint22_linear_1_37162)"
        strokeWidth={0.225}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <G filter="url(#filter7_f_1_37162)">
      <Path
        d="M13.862 6.85966L17.1328 5.11523C19.2125 6.61523 19.3063 9.32617 19.2125 10.0605L15.0783 10.623C14.0168 10.7674 13.0288 10.0536 12.8325 9.00057C12.6718 8.13873 13.0885 7.27222 13.862 6.85966Z"
        fill="url(#paint23_linear_1_37162)"
      />
    </G>
    <G filter="url(#filter8_f_1_37162)">
      <Path
        d="M12.1892 2.25456C11.0844 2.08769 10.121 2.25251 9.49631 3.08752C10.9922 3.08752 13.037 4.00526 12.7404 5.96916C12.6569 6.52155 12.5799 6.88414 12.1892 7.22201C12.1191 7.28107 12.0732 7.36412 12.061 7.45184C12.0264 7.70151 12.2441 7.91737 12.4915 7.86913C13.6785 7.64163 14.4491 6.79057 14.6249 5.52197C14.8486 3.9574 13.7519 2.49179 12.1892 2.25456Z"
        fill="url(#paint24_linear_1_37162)"
      />
    </G>
    <G filter="url(#filter9_i_1_37162)">
      <Path
        d="M11.8733 1.52954C10.6433 1.51454 9.57832 2.18954 9.02332 3.19454C9.48832 3.08954 9.96081 3.02954 10.4333 3.02954H10.5458C11.9033 3.02954 13.0433 4.13954 13.0358 5.49704C13.0283 6.11204 12.8033 6.66704 12.4283 7.09454C12.3608 7.16954 12.3233 7.26704 12.3233 7.36454C12.3233 7.64204 12.5933 7.84454 12.8558 7.75454C14.1158 7.32704 15.0233 6.13454 15.0233 4.72454C15.0308 2.98454 13.6133 1.55204 11.8733 1.52954Z"
        fill="#222120"
      />
      <Path
        d="M11.8733 1.52954C10.6433 1.51454 9.57832 2.18954 9.02332 3.19454C9.48832 3.08954 9.96081 3.02954 10.4333 3.02954H10.5458C11.9033 3.02954 13.0433 4.13954 13.0358 5.49704C13.0283 6.11204 12.8033 6.66704 12.4283 7.09454C12.3608 7.16954 12.3233 7.26704 12.3233 7.36454C12.3233 7.64204 12.5933 7.84454 12.8558 7.75454C14.1158 7.32704 15.0233 6.13454 15.0233 4.72454C15.0308 2.98454 13.6133 1.55204 11.8733 1.52954Z"
        fill="url(#paint25_radial_1_37162)"
      />
      <Path
        d="M11.8733 1.52954C10.6433 1.51454 9.57832 2.18954 9.02332 3.19454C9.48832 3.08954 9.96081 3.02954 10.4333 3.02954H10.5458C11.9033 3.02954 13.0433 4.13954 13.0358 5.49704C13.0283 6.11204 12.8033 6.66704 12.4283 7.09454C12.3608 7.16954 12.3233 7.26704 12.3233 7.36454C12.3233 7.64204 12.5933 7.84454 12.8558 7.75454C14.1158 7.32704 15.0233 6.13454 15.0233 4.72454C15.0308 2.98454 13.6133 1.55204 11.8733 1.52954Z"
        fill="url(#paint26_radial_1_37162)"
      />
      <Path
        d="M11.8733 1.52954C10.6433 1.51454 9.57832 2.18954 9.02332 3.19454C9.48832 3.08954 9.96081 3.02954 10.4333 3.02954H10.5458C11.9033 3.02954 13.0433 4.13954 13.0358 5.49704C13.0283 6.11204 12.8033 6.66704 12.4283 7.09454C12.3608 7.16954 12.3233 7.26704 12.3233 7.36454C12.3233 7.64204 12.5933 7.84454 12.8558 7.75454C14.1158 7.32704 15.0233 6.13454 15.0233 4.72454C15.0308 2.98454 13.6133 1.55204 11.8733 1.52954Z"
        fill="url(#paint27_radial_1_37162)"
      />
      <Path
        d="M11.8733 1.52954C10.6433 1.51454 9.57832 2.18954 9.02332 3.19454C9.48832 3.08954 9.96081 3.02954 10.4333 3.02954H10.5458C11.9033 3.02954 13.0433 4.13954 13.0358 5.49704C13.0283 6.11204 12.8033 6.66704 12.4283 7.09454C12.3608 7.16954 12.3233 7.26704 12.3233 7.36454C12.3233 7.64204 12.5933 7.84454 12.8558 7.75454C14.1158 7.32704 15.0233 6.13454 15.0233 4.72454C15.0308 2.98454 13.6133 1.55204 11.8733 1.52954Z"
        fill="url(#paint28_radial_1_37162)"
      />
    </G>
    <G filter="url(#filter10_f_1_37162)">
      <Path
        d="M12.0018 17.2793C12.3837 17.2793 12.7251 17.0686 12.9201 16.7527C13.0989 16.4631 12.912 16.0769 12.5869 16.0769H11.4166C11.0916 16.0769 10.8965 16.4719 11.0834 16.7527C11.2785 17.0774 11.6198 17.2793 12.0018 17.2793Z"
        fill="#DA9C94"
      />
    </G>
    <G filter="url(#filter11_f_1_37162)">
      <Path
        d="M12.1014 17.0168C12.4833 17.0168 12.8247 16.8062 13.0197 16.4902C13.1985 16.2006 13.0116 15.8145 12.6865 15.8145H11.5163C11.1912 15.8145 10.9961 16.2094 11.1831 16.4902C11.3781 16.8149 11.7194 17.0168 12.1014 17.0168Z"
        fill="url(#paint29_radial_1_37162)"
      />
      <Path
        d="M12.1014 17.0168C12.4833 17.0168 12.8247 16.8062 13.0197 16.4902C13.1985 16.2006 13.0116 15.8145 12.6865 15.8145H11.5163C11.1912 15.8145 10.9961 16.2094 11.1831 16.4902C11.3781 16.8149 11.7194 17.0168 12.1014 17.0168Z"
        fill="url(#paint30_radial_1_37162)"
      />
    </G>
    <G filter="url(#filter12_f_1_37162)">
      <Path
        d="M15.1283 13.6758C15.2458 13.833 15.0001 14.0247 14.7207 14.2336C14.4414 14.4425 14.2341 14.5895 14.1165 14.4323C13.999 14.275 14.1302 13.9782 14.4096 13.7694C14.6889 13.5605 15.0107 13.5186 15.1283 13.6758Z"
        fill="#C7A7A3"
      />
      <Path
        d="M15.1283 13.6758C15.2458 13.833 15.0001 14.0247 14.7207 14.2336C14.4414 14.4425 14.2341 14.5895 14.1165 14.4323C13.999 14.275 14.1302 13.9782 14.4096 13.7694C14.6889 13.5605 15.0107 13.5186 15.1283 13.6758Z"
        fill="url(#paint31_radial_1_37162)"
      />
    </G>
    <G filter="url(#filter13_f_1_37162)">
      <Path
        d="M16.7192 14.7598C16.6583 14.3332 16.4087 14.0117 16.2915 13.9043L15.811 14.4316L16.0278 14.8535L16.7192 14.7598Z"
        fill="url(#paint32_linear_1_37162)"
      />
    </G>
    <G filter="url(#filter14_f_1_37162)">
      <Path
        d="M10.022 14.7832C10.022 14.25 9.58838 13.8945 9.47119 13.7871L8.93799 14.3027L9.26611 14.9707L10.022 14.7832Z"
        fill="url(#paint33_linear_1_37162)"
      />
    </G>
    <G filter="url(#filter15_f_1_37162)">
      <Ellipse
        cx={8.01676}
        cy={14.032}
        rx={0.720313}
        ry={0.364545}
        transform="rotate(-27.914 8.01676 14.032)"
        fill="#C7A7A3"
        fillOpacity={0.9}
      />
      <Ellipse
        cx={8.01676}
        cy={14.032}
        rx={0.720313}
        ry={0.364545}
        transform="rotate(-27.914 8.01676 14.032)"
        fill="url(#paint34_radial_1_37162)"
      />
    </G>
    <G filter="url(#filter16_i_1_37162)">
      <Path
        d="M16.6372 11.3396C16.1947 11.1821 15.5797 11.0696 14.7847 11.1446"
        stroke="#1F1917"
        strokeWidth={0.75}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <G filter="url(#filter17_f_1_37162)">
      <Path
        d="M16.6372 11.2301C16.1947 11.0726 15.5797 10.9601 14.7847 11.0351"
        stroke="url(#paint35_linear_1_37162)"
        strokeWidth={0.225}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Path
      d="M23.2383 6.02509C23.2383 8.92458 20.8878 11.2751 17.9883 11.2751C15.0888 11.2751 12.7383 8.92458 12.7383 6.02509C12.7383 3.12559 15.0888 0.775085 17.9883 0.775085C20.8878 0.775085 23.2383 3.12559 23.2383 6.02509Z"
      fill="url(#paint36_radial_1_37162)"
    />
    <Path
      d="M23.2383 6.02509C23.2383 8.92458 20.8878 11.2751 17.9883 11.2751C15.0888 11.2751 12.7383 8.92458 12.7383 6.02509C12.7383 3.12559 15.0888 0.775085 17.9883 0.775085C20.8878 0.775085 23.2383 3.12559 23.2383 6.02509Z"
      fill="url(#paint37_radial_1_37162)"
    />
    <Path
      d="M23.2383 6.02509C23.2383 8.92458 20.8878 11.2751 17.9883 11.2751C15.0888 11.2751 12.7383 8.92458 12.7383 6.02509C12.7383 3.12559 15.0888 0.775085 17.9883 0.775085C20.8878 0.775085 23.2383 3.12559 23.2383 6.02509Z"
      fill="url(#paint38_radial_1_37162)"
    />
    <Path
      d="M23.2383 6.02509C23.2383 8.92458 20.8878 11.2751 17.9883 11.2751C15.0888 11.2751 12.7383 8.92458 12.7383 6.02509C12.7383 3.12559 15.0888 0.775085 17.9883 0.775085C20.8878 0.775085 23.2383 3.12559 23.2383 6.02509Z"
      fill="url(#paint39_radial_1_37162)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.999 2.65338C18.2061 2.65338 18.374 2.82127 18.374 3.02838V6.02665C18.374 6.23376 18.2061 6.40165 17.999 6.40165C17.7919 6.40165 17.624 6.23376 17.624 6.02665V3.02838C17.624 2.82127 17.7919 2.65338 17.999 2.65338Z"
      fill="url(#paint40_linear_1_37162)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.999 2.65338C18.2061 2.65338 18.374 2.82127 18.374 3.02838V6.02665C18.374 6.23376 18.2061 6.40165 17.999 6.40165C17.7919 6.40165 17.624 6.23376 17.624 6.02665V3.02838C17.624 2.82127 17.7919 2.65338 17.999 2.65338Z"
      fill="url(#paint41_radial_1_37162)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.999 2.65338C18.2061 2.65338 18.374 2.82127 18.374 3.02838V6.02665C18.374 6.23376 18.2061 6.40165 17.999 6.40165C17.7919 6.40165 17.624 6.23376 17.624 6.02665V3.02838C17.624 2.82127 17.7919 2.65338 17.999 2.65338Z"
      fill="url(#paint42_linear_1_37162)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.999 2.65338C18.2061 2.65338 18.374 2.82127 18.374 3.02838V6.02665C18.374 6.23376 18.2061 6.40165 17.999 6.40165C17.7919 6.40165 17.624 6.23376 17.624 6.02665V3.02838C17.624 2.82127 17.7919 2.65338 17.999 2.65338Z"
      fill="url(#paint43_radial_1_37162)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.2947 3.76666C19.4741 3.87022 19.5355 4.09956 19.432 4.27892L18.3131 6.21682C18.2096 6.39617 17.9802 6.45763 17.8009 6.35407C17.6215 6.25052 17.5601 6.02117 17.6636 5.84182L18.7825 3.90392C18.886 3.72456 19.1154 3.66311 19.2947 3.76666Z"
      fill="url(#paint44_linear_1_37162)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.2947 3.76666C19.4741 3.87022 19.5355 4.09956 19.432 4.27892L18.3131 6.21682C18.2096 6.39617 17.9802 6.45763 17.8009 6.35407C17.6215 6.25052 17.5601 6.02117 17.6636 5.84182L18.7825 3.90392C18.886 3.72456 19.1154 3.66311 19.2947 3.76666Z"
      fill="url(#paint45_linear_1_37162)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.2947 3.76666C19.4741 3.87022 19.5355 4.09956 19.432 4.27892L18.3131 6.21682C18.2096 6.39617 17.9802 6.45763 17.8009 6.35407C17.6215 6.25052 17.5601 6.02117 17.6636 5.84182L18.7825 3.90392C18.886 3.72456 19.1154 3.66311 19.2947 3.76666Z"
      fill="url(#paint46_radial_1_37162)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.2947 3.76666C19.4741 3.87022 19.5355 4.09956 19.432 4.27892L18.3131 6.21682C18.2096 6.39617 17.9802 6.45763 17.8009 6.35407C17.6215 6.25052 17.5601 6.02117 17.6636 5.84182L18.7825 3.90392C18.886 3.72456 19.1154 3.66311 19.2947 3.76666Z"
      fill="url(#paint47_linear_1_37162)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.2947 3.76666C19.4741 3.87022 19.5355 4.09956 19.432 4.27892L18.3131 6.21682C18.2096 6.39617 17.9802 6.45763 17.8009 6.35407C17.6215 6.25052 17.5601 6.02117 17.6636 5.84182L18.7825 3.90392C18.886 3.72456 19.1154 3.66311 19.2947 3.76666Z"
      fill="url(#paint48_radial_1_37162)"
      fillOpacity={0.7}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.9883 10.1501C20.2665 10.1501 22.1133 8.30326 22.1133 6.02509C22.1133 3.74691 20.2665 1.90009 17.9883 1.90009C15.7101 1.90009 13.8633 3.74691 13.8633 6.02509C13.8633 8.30326 15.7101 10.1501 17.9883 10.1501ZM17.9883 11.2751C20.8878 11.2751 23.2383 8.92458 23.2383 6.02509C23.2383 3.12559 20.8878 0.775085 17.9883 0.775085C15.0888 0.775085 12.7383 3.12559 12.7383 6.02509C12.7383 8.92458 15.0888 11.2751 17.9883 11.2751Z"
      fill="url(#paint49_linear_1_37162)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.9883 10.1501C20.2665 10.1501 22.1133 8.30326 22.1133 6.02509C22.1133 3.74691 20.2665 1.90009 17.9883 1.90009C15.7101 1.90009 13.8633 3.74691 13.8633 6.02509C13.8633 8.30326 15.7101 10.1501 17.9883 10.1501ZM17.9883 11.2751C20.8878 11.2751 23.2383 8.92458 23.2383 6.02509C23.2383 3.12559 20.8878 0.775085 17.9883 0.775085C15.0888 0.775085 12.7383 3.12559 12.7383 6.02509C12.7383 8.92458 15.0888 11.2751 17.9883 11.2751Z"
      fill="url(#paint50_radial_1_37162)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.9883 10.1501C20.2665 10.1501 22.1133 8.30326 22.1133 6.02509C22.1133 3.74691 20.2665 1.90009 17.9883 1.90009C15.7101 1.90009 13.8633 3.74691 13.8633 6.02509C13.8633 8.30326 15.7101 10.1501 17.9883 10.1501ZM17.9883 11.2751C20.8878 11.2751 23.2383 8.92458 23.2383 6.02509C23.2383 3.12559 20.8878 0.775085 17.9883 0.775085C15.0888 0.775085 12.7383 3.12559 12.7383 6.02509C12.7383 8.92458 15.0888 11.2751 17.9883 11.2751Z"
      fill="url(#paint51_radial_1_37162)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.9883 10.1501C20.2665 10.1501 22.1133 8.30326 22.1133 6.02509C22.1133 3.74691 20.2665 1.90009 17.9883 1.90009C15.7101 1.90009 13.8633 3.74691 13.8633 6.02509C13.8633 8.30326 15.7101 10.1501 17.9883 10.1501ZM17.9883 11.2751C20.8878 11.2751 23.2383 8.92458 23.2383 6.02509C23.2383 3.12559 20.8878 0.775085 17.9883 0.775085C15.0888 0.775085 12.7383 3.12559 12.7383 6.02509C12.7383 8.92458 15.0888 11.2751 17.9883 11.2751Z"
      fill="url(#paint52_radial_1_37162)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.9883 10.1501C20.2665 10.1501 22.1133 8.30326 22.1133 6.02509C22.1133 3.74691 20.2665 1.90009 17.9883 1.90009C15.7101 1.90009 13.8633 3.74691 13.8633 6.02509C13.8633 8.30326 15.7101 10.1501 17.9883 10.1501ZM17.9883 11.2751C20.8878 11.2751 23.2383 8.92458 23.2383 6.02509C23.2383 3.12559 20.8878 0.775085 17.9883 0.775085C15.0888 0.775085 12.7383 3.12559 12.7383 6.02509C12.7383 8.92458 15.0888 11.2751 17.9883 11.2751Z"
      fill="url(#paint53_radial_1_37162)"
    />
    <Path
      d="M18.7458 6.02932C18.7458 6.44122 18.4119 6.77513 18 6.77513C17.5881 6.77513 17.2542 6.44122 17.2542 6.02932C17.2542 5.61742 17.5881 5.28351 18 5.28351C18.4119 5.28351 18.7458 5.61742 18.7458 6.02932Z"
      fill="url(#paint54_radial_1_37162)"
    />
    <Path
      d="M18.7458 6.02932C18.7458 6.44122 18.4119 6.77513 18 6.77513C17.5881 6.77513 17.2542 6.44122 17.2542 6.02932C17.2542 5.61742 17.5881 5.28351 18 5.28351C18.4119 5.28351 18.7458 5.61742 18.7458 6.02932Z"
      fill="url(#paint55_radial_1_37162)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1_37162"
        x1={2.92969}
        y1={12.7793}
        x2={4.6875}
        y2={17.2793}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D5967D" />
        <Stop offset={1} stopColor="#CA8581" />
      </LinearGradient>
      <RadialGradient
        id="paint1_radial_1_37162"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(4.97461 14.9824) rotate(176.967) scale(2.65802 2.76398)"
      >
        <Stop offset={0.794737} stopColor="#ECB099" stopOpacity={0} />
        <Stop offset={1} stopColor="#DDA388" />
        <Stop offset={1} stopColor="#ECB099" />
      </RadialGradient>
      <RadialGradient
        id="paint2_radial_1_37162"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(4.97457 14.8418) rotate(90) scale(1.51473)"
      >
        <Stop stopColor="#CC8A77" />
        <Stop offset={1} stopColor="#CF8B77" />
      </RadialGradient>
      <LinearGradient
        id="paint3_linear_1_37162"
        x1={21.3867}
        y1={13.5762}
        x2={19.4498}
        y2={16.7168}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFDBC1" />
        <Stop offset={1} stopColor="#EBB2A3" />
      </LinearGradient>
      <RadialGradient
        id="paint4_radial_1_37162"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(19.4849 13.9512) rotate(90.9485) scale(3.53955 3.39211)"
      >
        <Stop offset={0.765592} stopColor="#C88E90" stopOpacity={0} />
        <Stop offset={1} stopColor="#C88E90" />
      </RadialGradient>
      <RadialGradient
        id="paint5_radial_1_37162"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(19.4849 14.5371) rotate(-48.351) scale(2.08583 2.05828)"
      >
        <Stop offset={0.586383} stopColor="#F7B899" />
        <Stop offset={0.883309} stopColor="#F7B899" stopOpacity={0} />
      </RadialGradient>
      <RadialGradient
        id="paint6_radial_1_37162"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(19.6289 15.5098) rotate(-77.9694) scale(2.92359 2.29584)"
      >
        <Stop offset={0.879486} stopColor="#F5C9AE" stopOpacity={0} />
        <Stop offset={1} stopColor="#F5C9AE" />
      </RadialGradient>
      <RadialGradient
        id="paint7_radial_1_37162"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(19.7344 14.959) rotate(8.97263) scale(1.12707 1.66624)"
      >
        <Stop offset={0.54973} stopColor="#F7BCA4" />
        <Stop offset={1} stopColor="#F6B799" />
      </RadialGradient>
      <LinearGradient
        id="paint8_linear_1_37162"
        x1={7.125}
        y1={12.7207}
        x2={15.6563}
        y2={12.7207}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F7C2AD" />
        <Stop offset={1} stopColor="#FFD0BA" />
      </LinearGradient>
      <LinearGradient
        id="paint9_linear_1_37162"
        x1={12.1146}
        y1={22.9043}
        x2={12.1146}
        y2={19.0605}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.195126} stopColor="#BC7F90" />
        <Stop offset={1} stopColor="#BC7F90" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="paint10_linear_1_37162"
        x1={5.20312}
        y1={13.5293}
        x2={13.6406}
        y2={15.6855}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D6A091" />
        <Stop offset={1} stopColor="#D6A091" stopOpacity={0} />
      </LinearGradient>
      <RadialGradient
        id="paint11_radial_1_37162"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(4.125 14.7012) rotate(82.1709) scale(7.57057 2.30829)"
      >
        <Stop stopColor="#EAB09A" />
        <Stop offset={1} stopColor="#EAB09A" stopOpacity={0} />
      </RadialGradient>
      <RadialGradient
        id="paint12_radial_1_37162"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(8.10938 22.4707) rotate(-95.4923) scale(9.79497 15.3696)"
      >
        <Stop offset={0.108925} stopColor="#C48A90" />
        <Stop offset={1} stopColor="#C48A90" stopOpacity={0} />
      </RadialGradient>
      <RadialGradient
        id="paint13_radial_1_37162"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(8.29687 13.7871) rotate(-61.8214) scale(2.23346 2.97795)"
      >
        <Stop offset={0.189297} stopColor="#CE9390" />
        <Stop offset={1} stopColor="#CE9390" stopOpacity={0} />
      </RadialGradient>
      <RadialGradient
        id="paint14_radial_1_37162"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(16.0313 13.9746) rotate(-79.5793) scale(2.07326 2.4275)"
      >
        <Stop offset={0.235016} stopColor="#F3B6A7" />
        <Stop offset={1} stopColor="#F5B8A9" stopOpacity={0} />
      </RadialGradient>
      <RadialGradient
        id="paint15_radial_1_37162"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(18.8437 14.5136) rotate(108.435) scale(4.29872 7.00395)"
      >
        <Stop stopColor="#FFDDC0" />
        <Stop offset={1} stopColor="#FFDDC0" stopOpacity={0} />
      </RadialGradient>
      <RadialGradient
        id="paint16_radial_1_37162"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(4.17188 6.63865) rotate(32.9574) scale(5.08372 9.58179)"
      >
        <Stop stopColor="#E5B095" />
        <Stop offset={1} stopColor="#E5B095" stopOpacity={0} />
      </RadialGradient>
      <LinearGradient
        id="paint17_linear_1_37162"
        x1={12.1146}
        y1={22.9043}
        x2={12.1146}
        y2={20.2793}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.195126} stopColor="#B47999" />
        <Stop offset={1} stopColor="#B47999" stopOpacity={0} />
      </LinearGradient>
      <RadialGradient
        id="paint18_radial_1_37162"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(13.0781 16.7168) rotate(-106.498) scale(14.0307 20.2722)"
      >
        <Stop offset={0.824901} stopColor="#D3B19D" stopOpacity={0} />
        <Stop offset={1} stopColor="#D3B19D" />
      </RadialGradient>
      <LinearGradient
        id="paint19_linear_1_37162"
        x1={10.3477}
        y1={18.7676}
        x2={10.7227}
        y2={18.0879}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DEABA7" />
        <Stop offset={1} stopColor="#DEABA7" stopOpacity={0} />
      </LinearGradient>
      <RadialGradient
        id="paint20_radial_1_37162"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(15.2458 14.209) rotate(90) scale(1.5 2.38592)"
      >
        <Stop offset={0.80198} stopColor="#865B4F" />
        <Stop offset={1} stopColor="#694B43" />
        <Stop offset={1} stopColor="#704D49" />
      </RadialGradient>
      <RadialGradient
        id="paint21_radial_1_37162"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(8.51837 14.209) rotate(90) scale(1.5 2.38592)"
      >
        <Stop offset={0.80198} stopColor="#865B4F" />
        <Stop offset={1} stopColor="#694B43" />
        <Stop offset={1} stopColor="#704D49" />
      </RadialGradient>
      <LinearGradient
        id="paint22_linear_1_37162"
        x1={7.25061}
        y1={11.5137}
        x2={9.32811}
        y2={11.1211}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#343434" />
        <Stop offset={1} stopColor="#343434" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="paint23_linear_1_37162"
        x1={13.875}
        y1={10.0605}
        x2={23.2969}
        y2={4.76365}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFE5CA" />
        <Stop offset={1} stopColor="#FFE5CA" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="paint24_linear_1_37162"
        x1={12.3419}
        y1={2.27528}
        x2={11.5629}
        y2={7.89594}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.567708} stopColor="#C49275" />
        <Stop offset={1} stopColor="#D59471" />
        <Stop offset={1} stopColor="#E3AB91" />
      </LinearGradient>
      <RadialGradient
        id="paint25_radial_1_37162"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(9.02332 4.81055) rotate(-11.0394) scale(5.97686 4.98604)"
      >
        <Stop offset={0.732503} stopColor="#3D3D3E" stopOpacity={0} />
        <Stop offset={1} stopColor="#3D3D3E" />
      </RadialGradient>
      <RadialGradient
        id="paint26_radial_1_37162"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(9.02332 5.20898) rotate(-23.6903) scale(5.01657 4.84374)"
      >
        <Stop offset={0.713542} stopColor="#443934" />
        <Stop offset={0.96875} stopColor="#443934" stopOpacity={0} />
      </RadialGradient>
      <RadialGradient
        id="paint27_radial_1_37162"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(12.5705 6.174) rotate(-122.764) scale(5.04136 5.19757)"
      >
        <Stop offset={0.825317} stopColor="#453B36" stopOpacity={0} />
        <Stop offset={1} stopColor="#453B36" />
      </RadialGradient>
      <RadialGradient
        id="paint28_radial_1_37162"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(11.4843 3.7793) rotate(57.8628) scale(4.31785 4.14722)"
      >
        <Stop offset={0.862139} stopColor="#251D20" stopOpacity={0} />
        <Stop offset={0.965829} stopColor="#251D20" />
      </RadialGradient>
      <RadialGradient
        id="paint29_radial_1_37162"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(11.5196 16.2715) rotate(1.40863) scale(1.43012 0.739477)"
      >
        <Stop offset={0.541193} stopColor="#E6AFA3" />
        <Stop offset={1} stopColor="#FFD4BF" />
      </RadialGradient>
      <RadialGradient
        id="paint30_radial_1_37162"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(12.0996 15.8145) rotate(90) scale(1.06641 1.346)"
      >
        <Stop offset={0.559454} stopColor="#E0A39C" stopOpacity={0} />
        <Stop offset={1} stopColor="#E0A39C" />
      </RadialGradient>
      <RadialGradient
        id="paint31_radial_1_37162"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(-0.428777 -0.552541 0.75424 -0.598668 14.824 14.3645)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.765532} stopColor="#FFE6E2" stopOpacity={0} />
        <Stop offset={0.966159} stopColor="#FFE6E2" />
      </RadialGradient>
      <LinearGradient
        id="paint32_linear_1_37162"
        x1={16.6841}
        y1={14.3086}
        x2={16.104}
        y2={14.666}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#B4948D" />
        <Stop offset={1} stopColor="#B4948D" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="paint33_linear_1_37162"
        x1={9.89349}
        y1={14.3086}
        x2={9.31342}
        y2={14.666}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#B4948D" />
        <Stop offset={1} stopColor="#B4948D" stopOpacity={0} />
      </LinearGradient>
      <RadialGradient
        id="paint34_radial_1_37162"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(-0.0143018 -0.913435 1.09769 -0.0363503 7.98885 14.6142)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.765532} stopColor="#FFE6E2" stopOpacity={0} />
        <Stop offset={0.966159} stopColor="#FFE6E2" />
      </RadialGradient>
      <LinearGradient
        id="paint35_linear_1_37162"
        x1={16.5352}
        y1={11.4433}
        x2={14.5196}
        y2={11.0114}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#343434" />
        <Stop offset={1} stopColor="#343434" stopOpacity={0} />
      </LinearGradient>
      <RadialGradient
        id="paint36_radial_1_37162"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(15.5785 9.21193) rotate(-46.2124) scale(9.48622)"
      >
        <Stop offset={0.598155} stopColor="#DDDADF" />
        <Stop offset={1} stopColor="#BDBABF" />
      </RadialGradient>
      <RadialGradient
        id="paint37_radial_1_37162"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(17.4861 6.41122) rotate(71.8466) scale(1.37648 1.57535)"
      >
        <Stop offset={0.219179} stopColor="#C3C0C7" />
        <Stop offset={0.404153} stopColor="#C3C0C7" stopOpacity={0.730662} />
        <Stop offset={0.801937} stopColor="#C3C0C7" stopOpacity={0.123055} />
        <Stop offset={1} stopColor="#C3C0C7" stopOpacity={0} />
      </RadialGradient>
      <RadialGradient
        id="paint38_radial_1_37162"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(17.6139 5.16033) rotate(177.101) scale(0.653691 1.66701)"
      >
        <Stop stopColor="#C3C0C7" />
        <Stop offset={0.275013} stopColor="#C3C0C7" stopOpacity={0.769759} />
        <Stop offset={0.492502} stopColor="#C3C0C7" stopOpacity={0.554237} />
        <Stop offset={0.702058} stopColor="#C3C0C7" stopOpacity={0.25} />
        <Stop offset={0.836314} stopColor="#C3C0C7" stopOpacity={0.0942649} />
        <Stop offset={1} stopColor="#C3C0C7" stopOpacity={0} />
      </RadialGradient>
      <RadialGradient
        id="paint39_radial_1_37162"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(17.7012 3.85471) rotate(177.957) scale(0.740713 1.68162)"
      >
        <Stop stopColor="#C3C0C7" />
        <Stop offset={0.481368} stopColor="#C3C0C7" stopOpacity={0.554237} />
        <Stop offset={0.70407} stopColor="#C3C0C7" stopOpacity={0.25} />
        <Stop offset={0.836314} stopColor="#C3C0C7" stopOpacity={0.0942649} />
        <Stop offset={1} stopColor="#C3C0C7" stopOpacity={0} />
      </RadialGradient>
      <LinearGradient
        id="paint40_linear_1_37162"
        x1={17.999}
        y1={2.65338}
        x2={17.999}
        y2={6.40165}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F83F4C" />
        <Stop offset={1} stopColor="#F74093" />
      </LinearGradient>
      <RadialGradient
        id="paint41_radial_1_37162"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(17.999 5.5329) rotate(-63.8004) scale(1.51503 0.498017)"
      >
        <Stop offset={0.394598} stopColor="#911A57" />
        <Stop offset={0.858815} stopColor="#911A57" stopOpacity={0.158851} />
        <Stop offset={1} stopColor="#911A57" stopOpacity={0} />
      </RadialGradient>
      <LinearGradient
        id="paint42_linear_1_37162"
        x1={17.6212}
        y1={4.00021}
        x2={18.0592}
        y2={4.00021}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#A23A67" />
        <Stop offset={0.706607} stopColor="#A23A67" stopOpacity={0.165681} />
        <Stop offset={1} stopColor="#A23A67" stopOpacity={0} />
      </LinearGradient>
      <RadialGradient
        id="paint43_radial_1_37162"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(18.5709 4.24977) rotate(-116.461) scale(1.7474 1.68537)"
      >
        <Stop stopColor="#A23A67" stopOpacity={0} />
        <Stop offset={0.802314} stopColor="#A23A67" stopOpacity={0} />
        <Stop offset={0.83572} stopColor="#A23A67" stopOpacity={0.0962606} />
        <Stop offset={0.894579} stopColor="#A23A67" stopOpacity={0.285673} />
        <Stop offset={1} stopColor="#A23A67" />
      </RadialGradient>
      <LinearGradient
        id="paint44_linear_1_37162"
        x1={19.2947}
        y1={3.76666}
        x2={18.2051}
        y2={5.65398}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#32183D" />
        <Stop offset={1} stopColor="#2C3A65" />
      </LinearGradient>
      <LinearGradient
        id="paint45_linear_1_37162"
        x1={18.4018}
        y1={4.56324}
        x2={18.7266}
        y2={4.75074}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#2E2840" />
        <Stop offset={1} stopColor="#2E2840" stopOpacity={0} />
      </LinearGradient>
      <RadialGradient
        id="paint46_radial_1_37162"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(19.419 4.00835) rotate(120) scale(2.14885 0.30573)"
      >
        <Stop stopColor="#50375F" />
        <Stop offset={0.358035} stopColor="#50375F" stopOpacity={0.75267} />
        <Stop offset={0.565724} stopColor="#50375F" stopOpacity={0.515368} />
        <Stop offset={1} stopColor="#50375F" stopOpacity={0} />
      </RadialGradient>
      <LinearGradient
        id="paint47_linear_1_37162"
        x1={19.2947}
        y1={3.76666}
        x2={19.1602}
        y2={3.99973}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3E1846" />
        <Stop offset={1} stopColor="#3E1846" stopOpacity={0} />
      </LinearGradient>
      <RadialGradient
        id="paint48_radial_1_37162"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(19.2042 4.0459) rotate(125.99) scale(0.216878 0.333985)"
      >
        <Stop stopColor="#50375F" />
        <Stop offset={0.463278} stopColor="#50375F" stopOpacity={0.515368} />
        <Stop offset={0.795574} stopColor="#50375F" stopOpacity={0.132882} />
        <Stop offset={1} stopColor="#50375F" stopOpacity={0} />
      </RadialGradient>
      <LinearGradient
        id="paint49_linear_1_37162"
        x1={21.1798}
        y1={1.53014}
        x2={13.5947}
        y2={10.7252}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#6D6B70" />
        <Stop offset={1} stopColor="#706C74" />
      </LinearGradient>
      <RadialGradient
        id="paint50_radial_1_37162"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(18.1386 5.95475) rotate(149.639) scale(5.46113)"
      >
        <Stop offset={0.914731} stopColor="#484150" stopOpacity={0} />
        <Stop offset={0.928424} stopColor="#484150" stopOpacity={0.101097} />
        <Stop offset={0.939283} stopColor="#484150" stopOpacity={0.27} />
        <Stop offset={0.969496} stopColor="#484150" stopOpacity={0.77} />
        <Stop offset={0.988059} stopColor="#484150" />
      </RadialGradient>
      <RadialGradient
        id="paint51_radial_1_37162"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(17.82 6.13876) rotate(-37.0827) scale(5.44206)"
      >
        <Stop stopColor="#888888" stopOpacity={0} />
        <Stop offset={0.938413} stopColor="#888888" stopOpacity={0} />
        <Stop offset={0.952942} stopColor="#888888" stopOpacity={0.128798} />
        <Stop offset={0.972799} stopColor="#888888" stopOpacity={0.53} />
        <Stop offset={0.988906} stopColor="#888888" stopOpacity={0.822895} />
        <Stop offset={1} stopColor="#888888" />
      </RadialGradient>
      <RadialGradient
        id="paint52_radial_1_37162"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(17.8852 6.15256) rotate(149.509) scale(4.3063)"
      >
        <Stop stopColor="#888888" />
        <Stop offset={0.935213} stopColor="#888888" />
        <Stop offset={0.9577} stopColor="#888888" stopOpacity={0.679592} />
        <Stop offset={0.984798} stopColor="#888888" stopOpacity={0.155947} />
        <Stop offset={1} stopColor="#888888" stopOpacity={0} />
      </RadialGradient>
      <RadialGradient
        id="paint53_radial_1_37162"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(18.1223 5.92075) rotate(-42.8395) scale(4.30606 4.3676)"
      >
        <Stop offset={0.925335} stopColor="#484150" />
        <Stop offset={0.940224} stopColor="#484150" stopOpacity={0.881499} />
        <Stop offset={0.964456} stopColor="#484150" stopOpacity={0.588909} />
        <Stop offset={0.989814} stopColor="#484150" stopOpacity={0.11} />
        <Stop offset={1} stopColor="#484150" stopOpacity={0} />
      </RadialGradient>
      <RadialGradient
        id="paint54_radial_1_37162"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(18.3755 5.84299) rotate(132.631) scale(1.26696)"
      >
        <Stop stopColor="#C9C6CC" />
        <Stop offset={0.101161} stopColor="#C9C6CC" />
        <Stop offset={0.259126} stopColor="#C3C0C6" />
        <Stop offset={0.371041} stopColor="#BAB7BD" />
        <Stop offset={0.793546} stopColor="#928E95" />
      </RadialGradient>
      <RadialGradient
        id="paint55_radial_1_37162"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(18.1362 5.91394) rotate(139.867) scale(0.975183)"
      >
        <Stop offset={0.487329} stopColor="#776F7F" stopOpacity={0} />
        <Stop offset={0.532414} stopColor="#776F7F" stopOpacity={0.0470898} />
        <Stop offset={0.576462} stopColor="#776F7F" stopOpacity={0.12} />
        <Stop offset={0.76616} stopColor="#776F7F" stopOpacity={0.498077} />
        <Stop offset={1} stopColor="#776F7F" />
      </RadialGradient>
    </Defs>
  </Svg>
);
