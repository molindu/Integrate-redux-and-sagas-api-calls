import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchDataRequest } from './actions/Actions';
import { View, Text, ActivityIndicator } from 'react-native';

const Component = ({ trainList, loading, error, fetchDataRequest }) => {
  useEffect(() => {
    fetchDataRequest();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View>
      <Text>Train List:</Text>
      <View>
        {trainList?.map((train) => (
          <Text key={train.id}>
            {train.train_id} {train.trainName}
          </Text>
        ))}
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    trainList: state.YourReducer.data?.train_list,
    loading: state.YourReducer.loading,
    error: state.YourReducer.error,
  };
};

export default connect(mapStateToProps, { fetchDataRequest })(Component);
