import Select from "react-select";


export const CustomSelect = () => {
  const options = [
    { value: "first new", label: "First new" },
    { value: "obsolete first", label: "Obsolete first" },
  ];
  return (
    <Select options={options}
      isMulti={false}
    />
  );
};