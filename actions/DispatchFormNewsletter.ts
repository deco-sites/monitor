export interface Props {
  body: {
    email: string;
    name: string;
    phone: string;
    businessName: string;
    plataform: string;
    origin: string;
  };
  url: string;
}

interface ResultRDStationSuccess {
  event_uuid: string;
}

const actionFormNewsletter = async (
  props: Props,
): Promise<ResultRDStationSuccess> => {
  console.log(props);
  const url = new URL(`${props.url}`);
  const {
    email,
    name = "",
    phone = "",
    businessName = "",
    plataform = "",
    origin = "",
  } = props.body;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      event_type: "CONVERSION",
      event_family: "CDP",
      payload: {
        conversion_identifier: "Contact Request",
        email: email,
        name: name,
        personal_phone: phone,
        company_name: businessName,
        cf_origin: origin,
        cf_plataform: plataform,
      },
    }),
  });

  return response.json();
};

export default actionFormNewsletter;
