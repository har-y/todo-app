import svg_icon from '../../assets/icons.svg';

const SvgIcon = (props) => {
  return (
    <svg className="h-6 w-6">
      <use xlinkHref={`${svg_icon}#${props.svg}`} />
    </svg>
  );
};

export default SvgIcon;
