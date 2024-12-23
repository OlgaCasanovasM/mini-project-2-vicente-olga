import ListItem from "./ListItem";

function Dashboard(props) {
  return (
    <div className="apartamentBox">
      {props.propertiesDisplayed.map(function (property) {
        return (
          <ListItem
            key={property.id}
            property={property}
            deleteProperty={props.deleteProperty}
          />
        );
      })}
    </div>
  );
}

export default Dashboard;
