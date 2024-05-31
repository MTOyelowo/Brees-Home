import Svg, { Path, SvgProps } from "react-native-svg";

const Bell = () => {
  return (
    <Svg width={14} height={18} fill="none">
      <Path
        fill="#978AF4"
        stroke="#978AF4"
        strokeWidth={0.3}
        d="m12.226 14.394-.128-.078a.041.041 0 0 0 .005-.013v-.007a.034.034 0 0 0-.004-.01l.127.108Zm0 0-.128-.078a.044.044 0 0 1-.01.011.027.027 0 0 1-.008.004.043.043 0 0 1-.014.002H1.934a.043.043 0 0 1-.014-.002.027.027 0 0 1-.008-.004.042.042 0 0 1-.01-.011.04.04 0 0 1-.005-.013.02.02 0 0 1 0-.007l.004-.01-.132-.072.132.072.719-1.324h8.76l.719 1.323.132-.071a.177.177 0 0 1-.005.18Zm.795-.596-.789-1.453V8.712c0-2.3-1.548-4.25-3.672-4.902V2.09C8.56 1.24 7.858.555 7 .555c-.858 0-1.56.685-1.56 1.533v1.72c-2.124.653-3.672 2.603-3.672 4.903v3.633l-.79 1.453c-.18.334-.17.727.028 1.051.198.324.546.516.928.516h3.068c.127.975.977 1.726 1.998 1.726s1.87-.752 1.998-1.726h3.068c.382 0 .73-.192.928-.516.198-.324.208-.717.027-1.05ZM6.486 2.09c0-.273.228-.501.514-.501.286 0 .514.228.514.501v1.512a5.348 5.348 0 0 0-1.028 0V2.09ZM2.814 8.712C2.814 6.452 4.69 4.61 7 4.61c2.31 0 4.186 1.843 4.186 4.103v3.218H2.814V8.712ZM7 16.06a.967.967 0 0 1-.933-.694h1.866A.967.967 0 0 1 7 16.06Z"
      />
      <Path
        fill="#978AF4"
        stroke="#978AF4"
        strokeWidth={0.3}
        d="M6.999 5.284c-1.923 0-3.492 1.535-3.492 3.428a.52.52 0 0 0 .523.516.52.52 0 0 0 .523-.516c0-1.318 1.095-2.396 2.446-2.396a.52.52 0 0 0 .523-.516.52.52 0 0 0-.523-.516Z"
      />
    </Svg>
  );
};

const Search = () => {
  return (
    <Svg width={13} height={13} fill="none">
      <Path
        stroke="#978AF4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M5.416 9.752a4.333 4.333 0 1 0 0-8.667 4.333 4.333 0 0 0 0 8.667ZM11.916 11.914 8.449 8.448"
      />
    </Svg>
  );
};

const Sort = () => {
  return (
    <Svg width={18} height={18} fill="none">
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m6.25 11.75 5.5-5.5"
      />
      <Path
        fill="#fff"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.708 7.167a.458.458 0 1 0 0-.917.458.458 0 0 0 0 .917ZM11.292 11.75a.458.458 0 1 0 0-.917.458.458 0 0 0 0 .917Z"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.583 4.6A2.017 2.017 0 0 1 4.6 2.583h.917c.532 0 1.043-.21 1.42-.586l.642-.642a2.017 2.017 0 0 1 2.86 0l.642.642c.377.375.888.586 1.42.586h.917A2.017 2.017 0 0 1 15.435 4.6v.917c0 .532.211 1.043.587 1.42l.641.642a2.018 2.018 0 0 1 0 2.86l-.641.642a2.016 2.016 0 0 0-.587 1.42v.917a2.017 2.017 0 0 1-2.017 2.017h-.916c-.533 0-1.044.211-1.421.587l-.642.641a2.018 2.018 0 0 1-2.86 0l-.642-.641a2.017 2.017 0 0 0-1.42-.587H4.6a2.017 2.017 0 0 1-2.017-2.017v-.916c0-.533-.21-1.044-.586-1.421l-.642-.642a2.016 2.016 0 0 1 0-2.86l.642-.642c.375-.377.586-.888.586-1.42V4.6"
      />
    </Svg>
  );
};

const ChevronRight = (props: SvgProps) => {
  return (
    <Svg width={8} height={12} fill="none" {...props}>
      <Path
        fill="#978AF4"
        fillRule="evenodd"
        stroke="#978AF4"
        strokeWidth={0.5}
        d="M5.003 6 .968 2.248a.595.595 0 1 1 .81-.871L6.75 6l-4.972 4.623a.595.595 0 1 1-.81-.87L5.003 6Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

const Home = (props: any) => {
  const { focused, color } = props;
  return (
    <Svg width={24} height={24} fill={focused ? color : "none"} {...props}>
      <Path
        stroke={color ? color : "#000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.157 20.771v-3.066c0-.78.636-1.414 1.424-1.42h2.886c.792 0 1.433.636 1.433 1.42v3.076c0 .662.534 1.204 1.203 1.219h1.924c1.918 0 3.473-1.54 3.473-3.438v0-8.724a2.44 2.44 0 0 0-.962-1.905l-6.58-5.248a3.18 3.18 0 0 0-3.945 0L3.462 7.943A2.42 2.42 0 0 0 2.5 9.847v8.715C2.5 20.46 4.055 22 5.973 22h1.924c.685 0 1.241-.55 1.241-1.229v0"
      />
    </Svg>
  );
};

const Pie = (props: any) => {
  const { focused, color } = props;
  return (
    <Svg width={24} height={24} fill={focused ? color : "none"} {...props}>
      <Path
        stroke={color ? color : "#000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.278 12.89c.675 0 1.241.556 1.138 1.223-.605 3.92-3.961 6.83-8.009 6.83A8.107 8.107 0 0 1 1.3 12.837c0-3.689 2.802-7.124 5.957-7.901.678-.168 1.373.31 1.373 1.007 0 4.729.158 5.952 1.056 6.617s1.954.33 6.592.33Z"
        clipRule="evenodd"
      />
      <Path
        stroke={color ? color : "#000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.693 8.952c.053-3.038-3.678-7.935-8.226-7.85a.679.679 0 0 0-.652.653c-.115 2.498.04 5.735.126 7.202a.89.89 0 0 0 .841.842c1.508.086 4.863.204 7.325-.168a.695.695 0 0 0 .586-.68Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

const Chart = (props: any) => {
  const { focused, color } = props;
  return (
    <Svg width={24} height={24} fill={focused ? color : "none"} {...props}>
      <Path
        fill={focused ? color : "none"}
        fillRule="evenodd"
        d="M5.33 0h9.34c3.4 0 5.32 1.93 5.33 5.33v9.34c0 3.4-1.93 5.33-5.33 5.33H5.33C1.93 20 0 18.07 0 14.67V5.33C0 1.93 1.93 0 5.33 0Zm4.72 15.86c.43 0 .79-.32.83-.75V4.92a.815.815 0 0 0-.38-.79.84.84 0 0 0-1.28.79v10.19c.05.43.41.75.83.75Zm4.6 0c.42 0 .78-.32.83-.75v-3.28a.839.839 0 0 0-1.28-.79.806.806 0 0 0-.38.79v3.28c.04.43.4.75.83.75Zm-8.43-.75a.827.827 0 0 1-.83.75c-.43 0-.79-.32-.83-.75V8.2a.84.84 0 0 1 .39-.79c.27-.17.61-.17.88 0s.42.48.39.79v6.91Z"
      />
      <Path
        stroke={focused ? "none" : color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.371 9.202v6.86M11.038 5.92v10.142M15.629 12.827v3.235"
        clipRule="evenodd"
      />
      {!focused ? (
        <Path
          stroke={color || "#000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15.686 1H6.314C3.048 1 1 3.312 1 6.585v8.83C1 18.688 3.038 21 6.314 21h9.372C18.962 21 21 18.688 21 15.415v-8.83C21 3.312 18.962 1 15.686 1Z"
        />
      ) : null}
    </Svg>
  );
};

const Profile = (props: any) => {
  const { focused, color } = props;
  return (
    <Svg width={24} height={24} fill={focused ? color : "none"} {...props}>
      <Path
        stroke={color ? color : "#000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.985 13.346c-3.868 0-7.17.585-7.17 2.927s3.281 2.948 7.17 2.948c3.867 0 7.17-.586 7.17-2.927s-3.282-2.948-7.17-2.948Z"
        clipRule="evenodd"
      />
      <Path
        stroke={color ? color : "#000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.429}
        d="M7.985 10.006A4.596 4.596 0 1 0 3.388 5.41a4.58 4.58 0 0 0 4.564 4.596h.033Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

const SvgIcon = {
  Bell,
  Search,
  Sort,
  Home,
  Pie,
  Profile,
  Chart,
  ChevronRight,
};
export default SvgIcon;
