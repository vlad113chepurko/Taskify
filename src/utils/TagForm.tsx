import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { InferType } from "yup";
import tagScheme from "../schemes/tagScheme";

type FormData = InferType<typeof tagScheme>;

type TagFormProps = {
  onSubmit: (data: FormData) => void;
};

function TagForm({ onSubmit }: TagFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(tagScheme),
  });

  return {
    register,
    errors,
    handleSubmit: handleSubmit(onSubmit),
  };
}

export default TagForm;
