import expect from 'expect';
import data from '../jsonFromDiagnostic';
import {
  getConceptResultsForSentenceCombining
} from '../../src/libs/conceptResults/sentenceCombining'

describe("Getting concept results from an answered SC object", () => {
  const question = data[2].data;

  const metadata = {
    correct: 1,
    directions: "Combine the sentences. (After, Even though, Since)",
    prompt: "It was snowing. Marcella wore a sweater.",
    answer: "Marcella wore a sweater since it was snowing."
  }

  it("should have the correct score and concept uids", () => {
    const expected = [{
      concept_uid: '7H2IMZvq0VJ4Uvftyrw7Eg',
      metadata: metadata,
      question_type: 'sentence-combining'
    },
    {
      concept_uid: 'nb0JW1r5pRB5ouwAzTgMbQ',
      metadata: metadata,
      question_type: 'sentence-combining'
    }]
    const generated = getConceptResultsForSentenceCombining(question)

    expect(generated).toEqual(expected);
  });
});
