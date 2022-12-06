
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
ReferenceField,
} from "react-admin";

// ------------------------------------------------

export default function ShowUser(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
<TextField source="name" />
<TextField source="email" />
<TextField source="gender" />
<NumberField source="age" />
<ReferenceField source="taskid" reference="task" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}