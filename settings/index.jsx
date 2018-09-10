function settingsComponent(props) {
  return (
    <Page>
      <Section
        title={<Text bold align="center">Endpoint Settings</Text>}>
                <TextInput
          settingsKey="url"
          label="URL"
        />

      </Section>
    </Page>
  );
}

registerSettingsPage(settingsComponent);
