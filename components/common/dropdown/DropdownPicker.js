import { Picker } from "@react-native-picker/picker";

const DropdownPicker = ({
  items,
  placeholder,
  onValueChange,
  selectedValue,
  style,
}) => {
  const pickerSelectStyles = {
    inputIOS: {
      ...style,
    },
    inputAndroid: {
      ...style,
    },
  };

  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={onValueChange}
      style={style}
    >
      {placeholder && <Picker.Item label={placeholder} value={""} />}

      {items.map((item) => (
        <Picker.Item key={item.value} label={item.label} value={item.value} />
      ))}
    </Picker>
  );
};

export default DropdownPicker;
