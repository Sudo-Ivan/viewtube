import { useMessagesStore } from '~/store/messages';

export const useSubscriptionIO = () => {
  const subscriptionsToImport = ref(null);
  const messagesStore = useMessagesStore();

  const getMergedImports = (imports: Array<any>) => {
    if (!imports) return [];
    return imports.map((el: { channelId: any }) => {
      const authorObj = subscriptionsToImport.value.find(
        (val: { authorId: any }) => val.authorId === el.channelId
      );
      return {
        authorId: el.channelId,
        author: authorObj?.author ?? null
      };
    });
  };

  const getSubscriptionsToImport = async (file: File, fileType: string) => {
    const fileReader = new FileReader();
    await new Promise(resolve => {
      fileReader.onload = () => {
        resolve(0);
      };
      fileReader.readAsText(file);
    });

    let subscriptions = [];
    if (fileType === 'json') {
      subscriptions = convertJSONToInternal(fileReader.result?.toString());
    } else if (fileType === 'csv') {
      subscriptions = convertFromCSVToJson(fileReader.result?.toString());
    } else if (fileType === 'opml') {
      subscriptions = convertFromOPMLToJson(fileReader.result?.toString());
    }

    if (subscriptions?.length <= 0) {
      messagesStore.createMessage({
        type: 'error',
        title: 'Invalid or empty file',
        message: 'Please check the file and try again'
      });
    } else {
      return subscriptions
        .sort((a, b) => a.author.localeCompare(b.author))
        .map(({ author, authorId }) => {
          return {
            author,
            authorId,
            selected: true
          };
        });
    }
  };

  return {
    subscriptionsToImport,
    getMergedImports,
    getSubscriptionsToImport
  };
};
