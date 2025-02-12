import getAuthApiHeadersForTest from '@hey/lib/getAuthApiHeadersForTest';
import axios from 'axios';
import { TEST_URL } from 'src/lib/constants';
import { describe, expect, test } from 'vitest';

describe('polls/create', async () => {
  test('should create a poll', async () => {
    const response = await axios.post(
      `${TEST_URL}/polls/create`,
      { length: 30, options: ['option 1', 'option 2'] },
      { headers: await getAuthApiHeadersForTest() }
    );

    expect(response.data.poll.id).toHaveLength(36);
  });
});
