
import { ContentFooter } from './ContentParts/ContentFooter/ContentFooter';
import { ContentHeader } from './ContentParts/ContentHeader/ContentHeader';
import { ContentMain } from './ContentParts/ContentMain/ContentMain';

export const Content = () => {
  return <form>
    <ContentHeader />
    <ContentMain />
    <ContentFooter />
  </form>
}