import type { ChangeEventHandler } from "react";

type Props = {
  placeholder: string;
  onchange: ChangeEventHandler<HTMLInputElement> | undefined;
  value: string;
  name: string;
};

const InputBox = ({ placeholder, name, onchange, value }: Props) => {
  return (
    <div className="">
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onchange}
        className={`bg-primary-400 text-grey-200 p-1 min-w-full rounded-[5px]`}
      />
      ;
    </div>
  );
};

export default InputBox;
