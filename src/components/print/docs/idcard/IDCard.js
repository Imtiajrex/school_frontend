import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Call } from "services/API/Call";
import PrintOptions from "../../PrintOptions";
import SchoolInfo from "../../SchoolInfo";
import { Input } from "reactstrap";
import ICard from "./ICard";
import { Button } from "reactstrap";

export default function IDCard(props) {
  const { url, title, indexed = true } = props;
  const [list, setList] = useState([]);
  const [logo_size, setLogoSize] = useState(50);
  const [image_size, setImageSize] = useState(80);

  const [head_color, setHeadColor] = useState("#525f7f");
  const [data_color, setDataColor] = useState("#3D4956");
  const [border_color, setBorderColor] = useState("#e9ecef");
  const [head_size, setHeadSize] = useState(12);
  const [data_size, setDataSize] = useState(11);
  const [card_width, setCardWidth] = useState(260);
  const [card_height, setCardHeight] = useState(310);
  const [school_info, setSchoolInfo] = useState({});

  React.useEffect(() => {
    Call({ method: "get", url })
      .then((res) => {
        setList(res);
      })
      .catch((err) => console.log(err));

    Call({ method: "get", url: "settings/institute_info" })
      .then((res) => {
        setSchoolInfo(res);
      })
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="bg-dark noprint printoptions" left={{ right: "0%" }}>
        <div className="mb-1 mt-1">Table Options</div>
        <small>Head Size</small>
        <Input
          type="number"
          placeholder="Head Size"
          value={head_size}
          bsSize="sm"
          className="mb-1"
          onChange={(e) => setHeadSize(e.target.value)}
        />
        <small>Data Size</small>
        <Input
          type="number"
          placeholder="Data Size"
          value={data_size}
          bsSize="sm"
          className="mb-1"
          onChange={(e) => setDataSize(e.target.value)}
        />
        <small>Logo Size</small>
        <Input
          type="number"
          placeholder="Logo Size"
          value={logo_size}
          bsSize="sm"
          className="mb-1"
          onChange={(e) => setLogoSize(e.target.value)}
        />
        <small>Image Size</small>
        <Input
          type="number"
          placeholder="Image Size"
          value={image_size}
          bsSize="sm"
          className="mb-1"
          onChange={(e) => setImageSize(e.target.value)}
        />
        <small>ID Card Width</small>
        <Input
          type="number"
          placeholder="ID Card Width"
          value={card_width}
          bsSize="sm"
          className="mb-1"
          onChange={(e) => setCardWidth(e.target.value)}
        />
        <small>ID Card Height</small>
        <Input
          type="number"
          placeholder="ID Card Height"
          value={card_height}
          bsSize="sm"
          className="mb-1"
          onChange={(e) => setCardHeight(e.target.value)}
        />
        <small>Head Color</small>
        <Input
          type="color"
          placeholder="Address,Number Color"
          value={head_color}
          bsSize="sm"
          className="mb-1"
          onChange={(e) => setHeadColor(e.target.value)}
        />
        <small>Data Color</small>
        <Input
          type="color"
          placeholder="Data Color"
          value={data_color}
          bsSize="sm"
          className="mb-1"
          onChange={(e) => setDataColor(e.target.value)}
        />
        <small>Border Color</small>
        <Input
          type="color"
          placeholder="Border Color"
          value={border_color}
          bsSize="sm"
          className="mb-1"
          onChange={(e) => setBorderColor(e.target.value)}
        />
        <Button size="sm" type="button" onClick={() => window.print()}>
          Print
        </Button>
      </div>
      <div style={{ position: "relative", display: "flex", flexWrap: "wrap" }}>
        {list.length > 0
          ? list.map((el, idx) => (
              <ICard
                key={idx}
                data={el}
                colors={{ data_color, head_color, border_color }}
                size={{
                  data_size,
                  head_size,
                  logo_size,
                  image_size,
                  card_height,
                  card_width,
                }}
                school_info={school_info}
              />
            ))
          : null}
      </div>
    </div>
  );
}
