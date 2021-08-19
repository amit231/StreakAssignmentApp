import * as React from "react"
import Svg, { G, Path, ClipPath, Defs, RadialGradient, LinearGradient, Stop, Circle } from "react-native-svg"

// Better version of Icons...

export function CrossButton(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <G filter="url(#prefix__filter0_d)">
                <Circle cx={22.705} cy={20.701} r={20} fill="#fff" />
                <Circle
                    cx={22.705}
                    cy={20.701}
                    r={19.453}
                    stroke="#000"
                    strokeOpacity={0.02}
                    strokeWidth={1.093}
                />
            </G>
            <Path
                d="M16.36 14.763L29.05 27.08m-.06-12.378L16.42 27.14"
                stroke="#CF482A"
                strokeWidth={4.23}
                strokeLinecap="round"
            />
            <Defs></Defs>
        </Svg>
    );
}


export function SettinIcon(props) {
    return (
        <Svg
            {...props}
            width={22}
            height={22}
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <G
                clipPath="url(#prefix__clip0)"
                stroke="#979797"
                strokeWidth={1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <Path d="M11.1 13.425a2.625 2.625 0 100-5.25 2.625 2.625 0 000 5.25z" />
                <Path d="M17.575 13.425a1.444 1.444 0 00.289 1.593l.052.052a1.752 1.752 0 11-2.476 2.477l-.053-.053a1.444 1.444 0 00-1.592-.288 1.444 1.444 0 00-.875 1.32v.15a1.75 1.75 0 11-3.5 0v-.08a1.444 1.444 0 00-.945-1.32 1.444 1.444 0 00-1.593.288l-.052.053a1.749 1.749 0 01-2.856-.568 1.75 1.75 0 01.38-1.909l.052-.052a1.444 1.444 0 00.289-1.592 1.443 1.443 0 00-1.321-.876h-.149a1.75 1.75 0 110-3.5h.079a1.444 1.444 0 001.321-.944 1.444 1.444 0 00-.289-1.593l-.052-.052A1.75 1.75 0 116.76 4.054l.052.053a1.444 1.444 0 001.593.289h.07a1.444 1.444 0 00.875-1.322v-.148a1.75 1.75 0 113.5 0v.078a1.443 1.443 0 00.875 1.322 1.444 1.444 0 001.593-.29l.052-.052a1.75 1.75 0 012.856.568 1.751 1.751 0 01-.38 1.909l-.052.052a1.444 1.444 0 00-.289 1.593v.07a1.444 1.444 0 001.321.875h.149a1.75 1.75 0 010 3.5h-.079a1.444 1.444 0 00-1.321.874v0z" />
            </G>
            <Defs>
                <ClipPath id="prefix__clip0">
                    <Path fill="#fff" transform="translate(.6 .3)" d="M0 0h21v21H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}


export function ViewButton(props) {
    return (
        <Svg
            {...props}
            width={26}
            height={19}
            viewBox="0 0 26 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M1.416 9.512S5.59 1.45 12.897 1.45c7.307 0 11.482 8.062 11.482 8.062s-4.175 8.062-11.482 8.062c-7.306 0-11.481-8.062-11.481-8.062z"
                stroke="#400142"
                strokeWidth={2.419}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M13.297 12.535c1.73 0 3.132-1.354 3.132-3.023 0-1.67-1.402-3.024-3.132-3.024-1.729 0-3.13 1.354-3.13 3.024s1.401 3.023 3.13 3.023z"
                stroke="#400142"
                strokeWidth={2.419}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}


export function Elipsis(props) {
    return (
        <Svg
            {...props}
            width={24}
            height={8}
            viewBox="0 0 24 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Circle cx={3.111} cy={4} r={3.111} fill="#F5F5F5" />
            <Circle cx={12} cy={4} r={3.111} fill="#F5F5F5" />
            <Circle cx={20.889} cy={4} r={3.111} fill="#F5F5F5" />
        </Svg>
    )
}



export function ArrowTopRight(props) {
    return (
        <Svg
            {...props}
            width={16}
            height={17}
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M14.326 2.662v8.916M5.147 2.4h8.916M12.07 4.603L2.6 13.828"
                stroke="#F5F5F5"
                strokeWidth={3.147}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}
export function QRCode(props) {
    return (
        <Svg
            {...props}
            width={35}
            height={35}
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Circle opacity={0.2} cx={17.5} cy={17.5} r={17.5} fill="#fff" />
            <Path
                d="M10.8 20.34v4.7M15.287 25.04H10.8M10.8 15.3v-4.7M15.287 10.6H10.8M24.608 15.3v-4.7M20.121 10.6h4.487M24.608 20.34v4.7M20.121 25.04h4.487"
                stroke="#fff"
                strokeWidth={2.196}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}



export function GameDigitBackground(props) {
    return (
        <Svg
            width={65}
            height={108}
            viewBox="0 0 65 108"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G filter="url(#prefix__filter0_i)">
                <Path
                    d="M57.43 0H7.37A7.19 7.19 0 00.18 7.19v93.02a7.19 7.19 0 007.19 7.19h50.06a7.19 7.19 0 007.19-7.19V7.19A7.19 7.19 0 0057.43 0z"
                    fill="#DA9B7C"
                    fillOpacity={0.3}
                />
            </G>
            <Path
                opacity={0.2}
                d="M58.176 6.444H6.624v94.512h51.552V6.444z"
                fill="url(#prefix__paint0_linear)"
            />
            <Defs>
                <LinearGradient
                    id="prefix__paint0_linear"
                    x1={32.401}
                    y1={131.933}
                    x2={32.401}
                    y2={-20.896}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#925A25" />
                    <Stop offset={0.133} stopColor="#925A25" />
                    <Stop offset={0.152} stopColor="#965F26" />
                    <Stop offset={0.177} stopColor="#A26D29" />
                    <Stop offset={0.205} stopColor="#B7862D" />
                    <Stop offset={0.23} stopColor="#D3A732" />
                    <Stop offset={0.234} stopColor="#CFA231" />
                    <Stop offset={0.262} stopColor="#BD8A2D" />
                    <Stop offset={0.29} stopColor="#B27B2B" />
                    <Stop offset={0.321} stopColor="#AB732A" />
                    <Stop offset={0.358} stopColor="#A97029" />
                    <Stop offset={0.412} stopColor="#B27C31" />
                    <Stop offset={0.519} stopColor="#C9A04F" />
                    <Stop offset={0.661} stopColor="#F8E38C" />
                    <Stop offset={0.698} stopColor="#DFC271" />
                    <Stop offset={0.779} stopColor="#B18139" />
                    <Stop offset={0.815} stopColor="#9D6728" />
                    <Stop offset={0.837} stopColor="#996228" />
                    <Stop offset={0.865} stopColor="#8D542A" />
                    <Stop offset={0.887} stopColor="#81462B" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}



export function Outer(props) {
    return (
        <Svg
            width={52}
            height={95}
            viewBox="0 0 52 95"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                opacity={0.2}
                d="M51.796.444H.244v94.512h51.552V.444z"
                fill="url(#prefix__paint0_linear)"
            />
            <Defs>
                <LinearGradient
                    id="prefix__paint0_linear"
                    x1={26.02}
                    y1={125.933}
                    x2={26.02}
                    y2={-26.896}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#925A25" />
                    <Stop offset={0.133} stopColor="#925A25" />
                    <Stop offset={0.152} stopColor="#965F26" />
                    <Stop offset={0.177} stopColor="#A26D29" />
                    <Stop offset={0.205} stopColor="#B7862D" />
                    <Stop offset={0.23} stopColor="#D3A732" />
                    <Stop offset={0.234} stopColor="#CFA231" />
                    <Stop offset={0.262} stopColor="#BD8A2D" />
                    <Stop offset={0.29} stopColor="#B27B2B" />
                    <Stop offset={0.321} stopColor="#AB732A" />
                    <Stop offset={0.358} stopColor="#A97029" />
                    <Stop offset={0.412} stopColor="#B27C31" />
                    <Stop offset={0.519} stopColor="#C9A04F" />
                    <Stop offset={0.661} stopColor="#F8E38C" />
                    <Stop offset={0.698} stopColor="#DFC271" />
                    <Stop offset={0.779} stopColor="#B18139" />
                    <Stop offset={0.815} stopColor="#9D6728" />
                    <Stop offset={0.837} stopColor="#996228" />
                    <Stop offset={0.865} stopColor="#8D542A" />
                    <Stop offset={0.887} stopColor="#81462B" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}


export function Border(props) {
    return (
        <Svg
            width={65}
            height={108}
            viewBox="0 0 65 108"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G filter="url(#prefix__filter0_i)">
                <Path
                    d="M57.25 0H7.19A7.19 7.19 0 000 7.19v93.02a7.19 7.19 0 007.19 7.19h50.06a7.19 7.19 0 007.19-7.19V7.19A7.19 7.19 0 0057.25 0z"
                    fill="#DA9B7C"
                    fillOpacity={0.3}
                />
            </G>
            <Defs></Defs>
        </Svg>
    )
}


export function RadialGradientSVG(props) {
    return (
        <Svg

            {...props}
            viewBox="0 0 375 421"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <G opacity={0.77}>
                <Path d="M0-2h375v423H0V-2z" fill="url(#prefix__paint0_radial)" />
                <Path
                    d="M0-2h375v423H0V-2z"
                    fill="url(#prefix__paint1_radial)"
                    fillOpacity={0.2}
                />
                <Path
                    d="M0-2h375v423H0V-2z"
                    fill="url(#prefix__paint2_diamond)"
                    fillOpacity={0.8}
                />
                <Path
                    d="M0-2h375v423H0V-2z"
                    fill="url(#prefix__paint3_diamond)"
                    fillOpacity={0.8}
                />
            </G>
            <Defs>
                <RadialGradient
                    id="prefix__paint0_radial"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="rotate(56.992 -51.803 214.148) scale(639.733 545.711)"
                >
                    <Stop offset={0.32} stopColor="#6C0070" />
                    <Stop offset={0.674} stopColor="#AD54AF" />
                    <Stop offset={1} stopColor="#AB0CB0" />
                </RadialGradient>
                <RadialGradient
                    id="prefix__paint1_radial"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(-167.5 -1198.50189 1063.702 -148.66066 -42.5 1094.09)"
                >
                    <Stop stopColor="#728EF1" />
                    <Stop offset={0.781} stopColor="#fff" stopOpacity={0} />
                    <Stop offset={1} stopColor="#7E98F2" stopOpacity={0.911} />
                </RadialGradient>
                <RadialGradient
                    id="prefix__paint2_diamond"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="rotate(63.147 -115.386 146.01) scale(266.766 236.495)"
                >
                    <Stop stopColor="#FFBB83" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0} />
                </RadialGradient>
                <RadialGradient
                    id="prefix__paint3_diamond"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="rotate(-155.716 282.077 162.171) scale(370.81 328.733)"
                >
                    <Stop stopColor="#8BAAE9" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0} />
                </RadialGradient>
            </Defs>
        </Svg>
    )
}


export function Burger(props) {
    return (
        <Svg
            width={50}
            height={50}
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G opacity={0.7}>
                <Circle cx={25} cy={25} r={25} fill="#EDE0FF" />
                <Circle
                    cx={25}
                    cy={25}
                    r={24.432}
                    stroke="#BB97F4"
                    strokeOpacity={0.35}
                    strokeWidth={1.136}
                />
            </G>
            <Path
                d="M32.02 35.428H18.843a4.587 4.587 0 01-4.582-4.581c0-.362.293-.655.655-.655h21.031c.362 0 .655.293.655.654a4.587 4.587 0 01-4.582 4.582zM25.432 13.086c-6.136 0-11.17 3.817-11.17 8.508 0 .362.292.655.654.655h21.031a.654.654 0 00.655-.655c0-4.691-5.035-8.508-11.17-8.508zm-4.817 5.044l-1.31 1.31a.654.654 0 11-.925-.926l1.31-1.31a.654.654 0 11.925.926zm3.97 0l-1.309 1.31a.654.654 0 11-.925-.926l1.309-1.31a.654.654 0 11.925.926zm3.927 0l-1.309 1.31a.654.654 0 11-.925-.926l1.309-1.31a.654.654 0 11.925.926zm3.608 0l-1.31 1.31a.654.654 0 11-.925-.926l1.309-1.31a.654.654 0 11.926.926zM14.916 24.91c.314 0 .589.04.825.105-.093.298-.119.387-.17 1.31a1.799 1.799 0 00-.655-.105.648.648 0 01-.655-.655c0-.366.288-.654.655-.654zM36.602 25.564a.648.648 0 01-.655.655c-.275 0-.484.039-.654.104-.014-.25.012-.72-.17-1.308.235-.066.51-.105.824-.105.367 0 .655.288.655.654z"
                fill="#8B3A8D"
            />
            <Path
                d="M15.74 25.016c.59.144.983.432 1.31.68.406.302.707.524 1.361.524.655 0 .943-.222 1.348-.523.472-.354 1.091-.786 2.178-.786 1.1 0 1.675.432 2.147.786.405.3.693.523 1.348.523.654 0 .942-.222 1.348-.523.471-.354 1.047-.786 2.147-.786 1.087 0 1.706.432 2.177.786.406.3.694.523 1.349.523.654 0 .955-.222 1.36-.523.328-.25.72-.537 1.31-.681a4.53 4.53 0 00-.664-1.414H16.405a4.53 4.53 0 00-.664 1.414zM34.468 28.84a4.536 4.536 0 00.825-2.514c-.262.092-.458.249-.694.419-.471.353-1.047.785-2.147.785-1.086 0-1.662-.432-2.133-.785-.406-.301-.738-.524-1.392-.524-.655 0-.956.223-1.362.524-.458.353-1.047.785-2.133.785-1.087 0-1.676-.432-2.134-.785-.406-.301-.707-.524-1.361-.524-.655 0-.986.223-1.392.524-.472.353-1.048.785-2.134.785-1.1 0-1.676-.432-2.147-.785-.235-.17-.432-.327-.694-.419.02.932.323 1.797.825 2.513h18.073zM31.921 16.173l-13.83.532-1.064 3.191 2.66.532 14.362-1.064-2.128-3.191z"
                fill="#8B3A8D"
            />
        </Svg>
    )
}

export function Store(props) {
    return (
        <Svg
            width={50}
            height={50}
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G opacity={0.7}>
                <Circle cx={25} cy={25} r={25} fill="#D7ECF3" />
                <Circle
                    cx={25}
                    cy={25}
                    r={24.5}
                    stroke="#97DEF4"
                    strokeOpacity={0.35}
                />
            </G>
            <Path
                d="M35.285 38.957V13.56a.562.562 0 00-.56-.56H16.24a.562.562 0 00-.56.56v25.632l.2-.163 2.472-2.166a.557.557 0 01.758.018l2.618 2.527c.18.163.45.18.631 0l2.726-2.527a.557.557 0 01.758 0l2.798 2.545c.18.163.451.163.614 0l2.852-2.58a.534.534 0 01.74 0l2.238 1.949.199.162zM19.238 18.578h6.552c.27 0 .505.18.541.433.037.325-.198.596-.505.596h-6.552c-.271 0-.506-.18-.542-.433-.036-.325.199-.596.506-.596zm12.328 15.939H19.292c-.271 0-.506-.18-.542-.434-.036-.324.199-.595.506-.595h12.292c.27 0 .505.18.542.433a.532.532 0 01-.524.596zm0-2.979H19.274c-.271 0-.506-.18-.542-.433-.036-.325.199-.596.506-.596H31.53c.27 0 .505.181.541.434a.51.51 0 01-.505.595zm0-2.978H19.274c-.271 0-.506-.18-.542-.433-.036-.325.199-.596.506-.596H31.53c.27 0 .505.18.541.433a.518.518 0 01-.505.596zm0-2.996H19.274c-.271 0-.506-.18-.542-.434-.036-.325.199-.595.506-.595H31.53c.27 0 .505.18.541.433a.51.51 0 01-.505.596zm0-2.979H19.292c-.271 0-.506-.18-.542-.433-.036-.325.199-.596.506-.596h12.292c.27 0 .505.18.542.434a.532.532 0 01-.524.595z"
                fill="#3A5B8D"
            />
        </Svg>
    )
}


export function SavingIcon(props) {
    return (
        <Svg
            width={50}
            height={50}
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G opacity={0.7}>
                <Circle cx={25} cy={25} r={25} fill="#F4E7B6" />
                <Circle
                    cx={25}
                    cy={25}
                    r={24.5}
                    stroke="#F4DA97"
                    strokeOpacity={0.35}
                />
            </G>
            <Path
                d="M32.891 15.203c.393.225.5.743.228 1.105l-5.907 7.867a.095.095 0 00.09.152l9.246-1.24c.451-.06.852.29.852.746v2.946c0 .45-.394.8-.842.746L27.3 26.413a.096.096 0 00-.086.154l5.934 7.513a.752.752 0 01-.213 1.117l-2.774 1.605a.752.752 0 01-1.07-.358L25.4 27.707a.108.108 0 00-.198-.003l-4.003 8.806a.752.752 0 01-1.09.322l-2.433-1.558a.752.752 0 01-.19-1.092l5.904-7.686a.095.095 0 00-.088-.153l-9.053 1.174a.752.752 0 01-.849-.746V23.83c0-.454.4-.805.85-.746l8.98 1.172a.096.096 0 00.09-.152l-5.82-7.659a.752.752 0 01.221-1.105l2.66-1.547a.752.752 0 011.066.347l3.826 8.684a.108.108 0 00.197 0l3.762-8.75a.752.752 0 011.064-.355l2.595 1.484z"
                fill="#8D623A"
            />
        </Svg>
    )
}
export function ForwardArrow(props) {
    return (
        <Svg
            width={6}
            height={9}
            viewBox="0 0 6 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        // style={{ backgroundColor: 'red' }}
        >
            <Path
                d="M.034 1.52L.12 7.298c.013.87 1.06 1.303 1.684.696l2.985-2.906a.992.992 0 00-.014-1.435L1.704.78C1.065.183.021.645.034 1.52z"
                fill={props.fill}
            />
        </Svg>
    )
}


export function Logo(props) {
    return (
        <Svg
            width={39}
            height={42}
            viewBox="0 0 39 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M24.846 23.161l5.096 4.796-8.826 9.176c-.53.551-1.409.575-1.97.053l-4.089-3.807 9.789-10.218z"
                fill="#fff"
            />
            <Path
                d="M15.076 33.404s3.706-3.373 3.654-6.243c-.052-2.869-1.212-4.468-3.068-6.268l-6.715-6.514-5.61 5.702a1.383 1.383 0 00.024 1.965l11.715 11.358zM14.25 18.974L9.155 14.18l8.747-9.14a1.407 1.407 0 011.972-.056l4.086 3.805-9.708 10.186z"
                fill="#fff"
            />
            <Path
                d="M23.94 8.764s-3.705 3.373-3.653 6.243c.052 2.87 1.212 4.469 3.067 6.269 2.132 2.067 6.86 6.466 6.86 6.466l5.48-5.655a1.383 1.383 0 00-.031-1.958L23.94 8.764z"
                fill="#fff"
            />
        </Svg>
    )
}


export function ArrowDown(props) {
    return (
        <Svg
            width={9}
            height={6}
            viewBox="0 0 9 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                opacity={0.54}
                d="M7.35.4H1.666C.81.4.368 1.424.956 2.046l2.816 2.978a.976.976 0 001.412.007l2.87-2.978C8.65 1.433 8.21.4 7.35.4z"
                fill="#FDBBFF"
            />
        </Svg>
    )
}


export function CardBackground(props) {
    return (
        <Svg
            width={273}
            height={120}
            viewBox="0 0 273 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G opacity={0.15} filter="url(#prefix__filter0_i)" fill="#C08BC0">
                <Path d="M244.502 46.29l57.685 14.578-26.578 109.501a5.962 5.962 0 01-7.241 4.39l-51.704-12.779 27.838-115.69z" />
                <Path d="M216.902 162.094s12.882-40.604.344-61.804c-12.537-21.2-27.819-28.311-49.051-34.022L91.358 45.599l-19.941 77.397 145.485 39.098zM150.072 56.52L92.387 41.94l26.578-109.5a5.963 5.963 0 017.241-4.39l51.705 12.779-27.839 115.69z" />
                <Path d="M177.669-59.284s-12.882 40.604-.344 61.805c12.538 21.2 27.819 28.31 49.051 34.022l76.837 20.668 19.941-77.396-145.485-39.099z" />
            </G>
            <Defs></Defs>
        </Svg>
    )
}
