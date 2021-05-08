import React from "react";
import { View, Image, Text, TouchableWithoutFeedback } from "react-native";
import { Card } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS } from "../../constants/colors";
import { ListItem, Rating, Avatar } from "react-native-elements";

const Doctors = (props) => {
  const { name, avatar, id, subtitle } = props;
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        console.log("ID", id);
      }}
    >
      <Card
        containerStyle={{
          elevation: 5,
          borderRadius: 12,
          backgroundColor: COLORS.card,
          marginBottom: 4,
        }}
      >
        <ListItem
          containerStyle={{
            backgroundColor: COLORS.white,
          }}
        >
          <Avatar
            rounded={true}
            size="large"
            onPress={() => console.log("Works!")}
            source={{ uri: avatar }}
            activeOpacity={0.7}
          />
          <ListItem.Content>
            <ListItem.Title style={{ paddingBottom: 4 }}>{name}</ListItem.Title>

            <ListItem.Subtitle style={{ paddingBottom: 4 }}>
              {subtitle}
            </ListItem.Subtitle>
            <ListItem.Subtitle>
              <Rating imageSize={18} />
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </Card>
    </TouchableWithoutFeedback>
  );
};

export default Doctors;
