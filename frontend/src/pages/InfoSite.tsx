import Layout from "./Layout";
import Container from "../components/InfoSite/Container";
import Text from "../components/InfoSite/Text";
import CTAButtons from "../components/InfoSite/CTAButtons";

export default function InfoSite() {
  return (
    <Layout>
      <Container>
        <Text />
        <CTAButtons />
      </Container>
    </Layout>
  );
}
