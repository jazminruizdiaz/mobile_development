import { useEffect, useState } from 'react';
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { styles } from './styles';
import { useThemedColors } from '../../../hooks/useThemedColors';

export interface DropdownOptions {
  label: string;
  value: string;
}

interface DropdownProps {
  options: DropdownOptions[];
  selectedValue: string | null;
  onSelect: (value: string | null) => void;
  placeholder?: string;
  searchable?: boolean;
}

export const Dropdown = ({
  options,
  selectedValue,
  onSelect,
  placeholder = 'Select an option',
  searchable = false,
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(selectedValue);
  const [items, setItems] = useState(options);

  //value change in the father compoentn
  useEffect(() => {
    setValue(selectedValue);
  }, [selectedValue]);

  useEffect(() => {
    setItems(options);
  }, [options]);

  const handleValueChange = (value: string | null) => {
    onSelect(value);
  };
  const colors = useThemedColors();

  return (
    <View>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onChangeValue={handleValueChange}
        placeholder={placeholder}
        searchable={searchable}
        style={[styles.dropdown, {backgroundColor: colors.buttonSecondary}]}
        textStyle={[styles.text, {
    color: colors.textPrimary}]}
        dropDownContainerStyle={[styles.dropdown, {backgroundColor: colors.buttonSecondary}] }
        maxHeight={300}
      />
    </View>
  );
};
