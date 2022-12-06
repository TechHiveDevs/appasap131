
import { 
  Edit,
  SimpleForm,
  
required,
TextInput,
AutocompleteInput,
NumberInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditUser(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <TextInput source="name" variant="outlined" validate={required()}  />
<TextInput source="email" variant="outlined" validate={required()}  />
<AutocompleteInput variant="outlined" source="gender" choices={[
{ id: "Male", name: "Male" },
{ id: "Female", name: "Female" },
]}  />
<NumberInput source="age" variant="outlined"  />
<ReferenceInput label="task" source="taskid" reference="task">
        <AutocompleteInput variant="outlined" /* optionText="task"   */ />
      </ReferenceInput>
    

      </SimpleForm>
    </Edit>
  );
}