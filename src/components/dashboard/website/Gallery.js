import Index from "components/crud/Index";
import { MyEditor } from "components/controls/MyEditor";
import React, { useMemo, useState } from "react";
import { Call } from "services/API/Call";

export default function Gallery() {
  const [album_list, setAlbumList] = useState([]);
  React.useEffect(() => {
    Call({ method: "get", url: "website_settings/albums?option=true" })
      .then((res) => setAlbumList(res))
      .catch((err) => console.log(err));
  }, []);

  const send_data = [
    {
      placeholder: "Image",
      type: "file",
      name: "image[]",
      required: true,
      multiple: true,
    },
    {
      placeholder: "Caption",
      type: "textarea",
      name: "caption",
      required: false,
    },
    {
      placeholder: "Album",
      type: "select",
      name: "parent_album_id",
      options: album_list,
      required: false,
    },
  ];
  const edit_data = [
    {
      placeholder: "Caption",
      type: "textarea",
      name: "caption",
      required: false,
    },
    {
      placeholder: "Album",
      type: "select",
      name: "parent_album_id",
      options: album_list,
      required: false,
    },
  ];
  return (
    <div>
      <Index
        title="Gallery"
        list_url="/website_settings/gallery"
        list_head={[
          {
            title: "Image",
            identifier: "image_name",
            type: "image",
          },
          {
            title: "Parent Album",
            identifier: "album_name",
          },
          {
            title: "Caption",
            identifier: "caption",
          },
        ]}
        file={true}
        add={true}
        edit={true}
        remove={true}
        add_data={send_data}
        edit_data={edit_data}
        add_initial_values={{ "image[]": {}, caption: "", parent_album_id: -1 }}
      />
    </div>
  );
}
