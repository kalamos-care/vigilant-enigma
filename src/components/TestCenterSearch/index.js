import React, { useContext, useRef } from 'react'
import { Grid, TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import CardView from '~/theme/modules/views/Card';
import FunctionsContext from '~/context/FunctionsContext';

const TestCenterSearch = () => {
  const searchTermEl = useRef(null);
  const {
    proximity: {
      results,
      loading
    },
    updateProximityOrigin,
  } = useContext(FunctionsContext);

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
            type="button"
            onClick={() => updateProximityOrigin(searchTermEl.current.value)}
          >
            Submit
          </Button>
        </form>
      </div>
      <Grid
        container
        spacing={2}
        direction="column"
        justify="flex-start"
        alignItems="stretch"
      >
        {
          results.length ? results.map((result, i) =>
            <Grid
              item
              key={result.field_org_id}
            >
              <CardView
                title={result.title_field}
                subtitle={[
                  `${result.field_org_street1} ${result.field_org_street2} ${result.field_org_city_name}, ${result.field_org_state} ${result.field_org_zipcode}`,
                  result.field_org_phone,
                ]}
                action="Select"
              />
            </Grid>
          ) : <Grid item>{loading ? 'Loading' : 'No Results'}</Grid>
        }
      </Grid>
    </>
  );
};

export default TestCenterSearch;