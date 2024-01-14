const TimeAddIcon = ({fill = '#ffffff', width = '25px', height = '25px'}: {width?: string; height?: string; fill?: string}) => {
    return <svg fill={fill} width={width} height={height} viewBox='0 0 25 25'>
        <path d="M23,18H20V15a1,1,0,0,0-2,0v3H15a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V20h3a1,1,0,0,0,0-2Z
M11,7v4.586L8.293,14.293a1,1,0,1,0,1.414,1.414l3-3A1,1,0,0,0,13,12V7a1,1,0,0,0-2,0Z
M14.728,21.624a9.985,9.985,0,1,1,6.9-6.895,1,1,0,1,0,1.924.542,11.989,11.989,0,1,0-8.276,8.277,1,1,0,1,0-.544-1.924Z"/>
    </svg>
}

export default TimeAddIcon;
