import Image from "next/image";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdChangeCircle } from "react-icons/md";

type Props = {
  label: string;
  onChange: (base64: string) => void;
  value?: string;
  disabled?: boolean;
};

const ImageUpload = ({
  label,
  onChange,
  value,
  disabled,
}: Props): JSX.Element => {
  const [base64, setBase64] = useState(value);
  // let yourBase64String = "";
  // if (typeof base64 === "string") {
  //   yourBase64String = base64?.substring(base64?.indexOf(",") + 1);
  // }
  // const bits = yourBase64String?.length * 6; // 567146
  // const bytes = bits / 8;

  // console.log(bytes);

  const [base64Size, setBase64Size] = useState(0);
  const handleChange = useCallback(
    (base64: string) => {
      onChange(base64);
    },
    [onChange]
  );

  const handleDrop = useCallback(
    (files: any) => {
      setBase64("");
      setBase64Size(files[0].size);
      // console.log(files[0]);
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event: any) => {
        setBase64(event.target.result);
        handleChange(event.target.result);
      };

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");

      reader.readAsDataURL(file);
    },
    [handleChange]
  );

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    // maxSize: 100,
    onDrop: handleDrop,
    disabled,
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
  });

  return (
    <>
      <div className="flex justify-center items-center gap-2">
        <div
          {...getRootProps({
            className:
              "w-full p-4 text-white text-center border-2 border-dotted border-neutral-700 rounded-md cursor-pointer",
          })}
        >
          <input {...getInputProps()} />
          {base64 ? (
            <>
              <div className="flex items-center justify-center relative">
                <Image
                  alt="uploaded image"
                  src={base64}
                  height={100}
                  width={100}
                />
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                  <MdChangeCircle
                    size={40}
                    color="white"
                    className="cursor-pointer"
                  />
                </div>
              </div>
              <p className="text-white">
                Size:{" "}
                {typeof base64Size === "number" &&
                  (base64Size / 1000000).toFixed(2)}
                MB
              </p>
            </>
          ) : (
            <p className="text-white">{label}</p>
          )}
        </div>
        {base64 !== "" && base64 !== null && (
          <AiFillCloseCircle
            onClick={() => setBase64("")}
            size={40}
            color="white"
            className="cursor-pointer"
          />
        )}
      </div>
    </>
  );
};

export default ImageUpload;
