import React, { useState, useEffect, useRef } from 'react'
import CardView from '~/theme/modules/views/Card';
import mockedProximityResults from '../../../__mocks__/proximity';
import { Grid, TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'

const TestCenterSearch = () => {
  const searchTermEl = useRef(null);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    if (searchTerm.length) {
      setIsloading(true);
      setResults([]);
      setTimeout(() => {
        setResults(mockedProximityResults);
        setIsloading(false);
      }, 1000)
    }
  }, [searchTerm]);

  return (
    <>
      <div>
        <form>
          <TextField
            inputRef={searchTermEl}
            placeholder="Enter Location"
          />
          <Button
            variant="text"
            color="default"
            onClick={() => setSearchTerm(searchTermEl.current.value)}
          >
            Submit
          </Button>
        </form>
      </div>
      <Grid
        container
        spacing="2"
        direction="column"
        justify="flex-start"
        alignItems="stretch"
      >
        {
          results.length ? results.map(result =>
            <Grid item>
              <CardView
                key={result.field_org_id}
                title={result.title_field}
                subtitle={[
                  `${result.field_org_street1} ${result.field_org_street2} ${result.field_org_city_name}, ${result.field_org_state} ${result.field_org_zipcode}`,
                  result.field_org_phone,
                ]}
                action="Select"
              />
            </Grid>
          ) : <Grid item>{isLoading ? 'Loading' : 'No Results'}</Grid>
        }
      </Grid>
    </>
  );
};

export default TestCenterSearch;