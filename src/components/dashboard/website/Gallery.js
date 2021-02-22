import Index from "components/crud/Index";
import React, { useState } from "react";
import { Call } from "services/API/Call";

export default function Gallery({ permission }) {
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
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
        add={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.create) != -1
        }
        list_active={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.view) != -1
        }
        remove={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.delete) != -1
        }
        edit={
          user_role == "Super Admin" ||
          user_permissions.indexOf(permission.update) != -1
        }
        add_data={send_data}
        edit_data={edit_data}
        add_initial_values={{ "image[]": {}, caption: "", parent_album_id: -1 }}
      />
    </div>
  );
}
