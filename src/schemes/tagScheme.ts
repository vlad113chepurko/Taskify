import * as yup from "yup";

const tagScheme = yup.object({
  tagName: yup.string().min(1).max(15).required(
    "Tag must be greater than 1 and less than or equal to 15",
  ),
})

export default tagScheme;