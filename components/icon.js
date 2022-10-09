import styled from "styled-components";
import * as bootstrap from '@styled-icons/bootstrap'
import * as faSolid from '@styled-icons/fa-solid'

const iicons = {
  'bootstrap': bootstrap,
  'faSolid': faSolid,
}
export default function Icon({
  iconSet = "faSolid",
  iconName = "HandPeace",
  size = "48",
  color = "black",
}) {
  const RegIcon = iicons[iconSet][iconName];
  const SIcon = styled(RegIcon)`
    color: ${color};
  `;

  return <SIcon size={size} />;
}
