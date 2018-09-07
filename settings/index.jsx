function settingsComponent(props) {
  return (
    <Page>
      <Section
        title={<Text bold align="center">App Settings</Text>}>
        <TextInput label="example" settingsKey="text" />
      </Section>
    </Page>
  );
}

registerSettingsPage(settingsComponent);
